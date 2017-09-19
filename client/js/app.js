class App {
  constructor () {
    this.$buttons = new El('#buttons')
    this.$audio = document.querySelector('audio')
    this.audioCollection = {}
    this.recorder = null
    this.recordingTime = 3000 // ms
    this.channel = location.pathname.replace('/channel/', '')
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

    navigator.mediaDevices.getUserMedia({audio:true})
      .then(stream => {
        this.recorder = new MediaRecorder(stream)
      })
      .catch(e => log(e))

    // Connect to socket server, set event handlers and get current channel.
    this.connect(() => {
      this.events = new InstabuddyEvents(this)
      this.getChannel()
    })
  }

  connect (callback) {
    this.ws = new WebSocket(config.wsUrl)

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

    // TEST BINARY CLIENT
    this.client = new BinaryClient(config.wsBinaryUrl)
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

  saveButton (button) {
    fetch(button.src).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          console.log(buffer)
          const meta = JSON.stringify({
            id: button.id,
            name: button.name,
            channel: this.channel
          })
          const stream = this.client.createStream(meta)
          stream.write(buffer)
          stream.end()
        })
    })
  }

  play (id) {
    log('play', id)
    const $el = new El(`#btn-${id}`)

    $el.addClass('playing')
    let src = this.audioCollection[id].src
    if (src.match(/^(?!blob:)/)) src = config.audioServer + src
    this.$audio.src = src
    this.$audio.play()

    setTimeout(() => {
      log('playing stopped')
      $el.removeClass('playing')
    }, this.recordingTime)
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
        <i title="Download" onclick="app.download(event, ${id})">D</i>
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

const app = new App()
