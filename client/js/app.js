class App {
  constructor (mode) {
    this.$buttons = new El('#buttons')
    this.$audio = document.querySelector('audio')
    this.$addButton = new El('#add')
    this.$error = new El('#error')
    this.audioCollection = {}
    this.recorder = null
    this.recordingTime = 3000 // ms
    this.channel = this.getChannelName()
    this.colors = [
      'color1',
      'color2',
      'color3',
      'color4',
      'color5',
      'color6',
      'color7',
      'color8'
    ]
    this.downloadLink = document.querySelector('#download')
    this.messages = {
      noAudioRecording: 'Your browser does not support audio recording, sorry.',
      noWebSocketSupport: 'InstaBuddy is not fully supported on your browser. Please, try with latest Chrome or Firefox :)',
      notSupported: 'InstaBuddy is not fully supported on your browser. Please, try with latest Chrome or Firefox :)',
      noAudioPlayback: 'Audio playback is not supported on your browser. Please, try with latest Chrome or Firefox :)'
    }
    this.playing = false
    this.mode = mode

    try {
      navigator.mediaDevices.getUserMedia({audio:true})
        .then(stream => {
          try {
            this.recorder = new MediaRecorder(stream)
          } catch (e) {
            this.handleError('noAudioRecording', e)
          }
        })
        .catch(e => {
          this.handleError('noAudioRecording', e)
        })
    } catch (e) {
      this.handleError('noAudioRecording', e)
    }

    // Check for websockets support.
    if (! 'WebSocket' in window) {
      alert(this.messages.noWebSocketSupport)
      return
    }

    // Connect to socket server, set event handlers and get current channel.
    this.connect(() => {
      this.events = new InstabuddyEvents(this)
      if (this.mode !== 'standalone') this.getChannel()
    })
  }

  getChannelName () {
    if (!location.pathname.match('play')) {
      return location.pathname.replace('/channel/', '')
    }

    return location.pathname.match(/channel\/(.*?)\//)[1]
  }

  handleError (type, e) {
    const handlers = {
      noAudioRecording: () => {
        log(e)
        if (this.$addButton) this.$addButton.hide()
        alert(this.messages.noAudioRecording)
      },
      noWebSocketSupport: () => {
        log(e)
        alert(this.messages.noWebSocketSupport)
      },
      noAudioPlayback: () => {
        log(e)
        alert(this.messages.noAudioPlayback)
        this.$buttons.hide()
        this.showError(this.messages.noAudioPlayback)
      }
    }

    const defaultHandler = () => {
      alert(this.messages.notSupported)
    }

    const handlerMethod = handlers[type] || defaultHandler
    handlerMethod()
  }

  showError (message) {
    this.$error
      .html(message)
      .show()
  }

  connect (callback) {
    let wsProto = 'ws'
    if (location.protocol === 'https:') wsProto = 'wss'
    this.ws = new WebSocket(`${wsProto}://${location.host}`)
    this.ws.binaryType = 'arraybuffer'

    this.ws.onopen = () => {
      log('WebSocket connected.')
      if (typeof callback === 'function') callback()
    }

    this.ws.onmessage = (event) => {
      const {type, data, error} = JSON.parse(event.data)
      log(`Got message '${type}'`, data, error)
      if (typeof this.events[type] === 'function') this.events[type]({type, data, error})
    }

    this.ws.onerror = (event) => {
      log('ERROR:', event)
    }
  }

  send (message) {
    const data = JSON.stringify(message)
    this.ws.send(data)
  }

  getChannel () {
    log('Get channel...')
    this.send({type: 'getChannel', 'name': this.channel})
  }

  onButtonClick (event) {
    // log('button clicked', event)
    const id = event.target.dataset.id
    if (!id) return
    if (this.audioCollection[id].src) return this.play(id)
    this.record(id, event)
  }

  record (id, event) {
    log('recording started', id)
    const $el = new El(event.target)
    $el.addClass('recording')

    const audioChunks = []
    this.recorder.start()
    this.recorder.ondataavailable = e => {
      audioChunks.push(e.data)
      if (this.recorder.state !== "inactive") return

      // Recording stopped.
      const blob = new Blob(audioChunks, {type: 'audio/webm'})
      this.audioCollection[id].src = URL.createObjectURL(blob)
      this.saveButton(this.audioCollection[id])
    }

    setTimeout(() => {
      this.recorder.stop()
      log('recording stopped', id)
      $el.removeClass('recording')
      $el.removeClass('empty')
    }, this.recordingTime)
  }

  sendBinary (buffer, {id, name, channel}) {
    const xhr = new XMLHttpRequest
    const url = `/binary/${channel}/${id}/${name}`
    xhr.open('POST', url, true)
    xhr.send(buffer)
  }

  saveButton (button) {
    fetch(button.src).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          const meta = {
            id: button.id,
            name: button.name,
            channel: this.channel
          }
          this.sendBinary(buffer, meta)
        })
    })
  }

  play (id) {
    if (this.playing) return

    log('play', id)
    this.playing = true
    const $el = new El(`#btn-${id}`)

    $el.addClass('playing')
    let src = this.audioCollection[id].src
    this.$audio.src = src

    // Start playback.
    this.$audio
      .play()
      .then(() => {})
      .catch(e => {
        this.handleError('noAudioPlayback', e)
      })
    this.sendPlay(id, src)

    setTimeout(() => {
      log('playing stopped')
      $el.removeClass('playing')
      this.playing = false
    }, this.recordingTime)
  }

  sendPlay (id, src) {
    this.send({
      type: 'play',
      data: { channel: this.channel, id, src }
    })
  }

  download (event, id) {
    console.log('download:', id)
    event.stopPropagation()
    event.preventDefault()

    this.downloadLink.href = this.audioCollection[id].src
    this.downloadLink.download = this.audioCollection[id].name.replace(' ', '-') + '.webm'
    this.downloadLink.click()
  }

  onKey (code) {

  }

  getRandomColor () {
    const total = this.colors.length
    const index = Math.round(Math.random() * total)
    return this.colors[index]
  }

  removeButton (event, id) {
    event.stopPropagation()
    const $button = new El(`#btn-${id}`)
    $button.remove()

    this.send({type: 'removeButton', channel: this.channel, id})
  }

  addButton (event, button = {}) {
    let {id, name} = button
    if (event) event.stopPropagation()
    name = name || prompt('Button name?')
    if (!name || !name.trim()) return

    const empty = id? '' : ' empty'
    id = id || (new Date()).getTime()
    const elId = `btn-${id}`
    const color = this.getRandomColor()
    this.$buttons.prependHtml(`
      <div id="${elId}" data-id="${id}" class="btn${empty} ${color}">
        <p class="ellipsis">${name}</p>
        <div class="button-actions">
          <i title="Download" class="download" onclick="app.download(event, ${id})">💾</i>
          <i title="Delete" class="remove" onclick="app.removeButton(event, ${id})">⌫</i>
        </div>
      </div>
    `)

    this.addAudio(id, {id, name, color})

    return id
  }

  addAudio(id, button) {
    this.audioCollection[id] = button
  }
}

function log () {
  console.log('[ APP ]-->', ...arguments)
}

const app = new App(mode)
