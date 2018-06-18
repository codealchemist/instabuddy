class App {
  constructor (mode) {
    this.$buttons = new El('#buttons')
    this.$audio = document.querySelector('audio')
    this.$addButton = new El('#add')
    this.$error = new El('#error')
    this.$drop = new El('#drop')
    this.dragTimeout
    this.audioCollection = {}
    this.recorder = null
    this.recordingTime = 3000 // ms
    this.dropAudioDurationLimit = this.recordingTime / 1000
    this.channel = this.getChannelName()
    this.url = location.href
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
    this.alerts = {
      playbackError: new Message('Oops, playback failed.', {type: 'error'}),
      playbackNotFoundError: new Message('Error: Audio source not found.', {type: 'error'}),
      playbackErrorRepeated: new Message(`
        Playback failed several times. Maybe your browser does not support webm audio.
      `, {type: 'error'}),
      clipboardCopyOk: new Message('Copied to clipboard!', {type: 'success'}),
      noAudioPlayback: new Message('Audio playback is not supported on your browser.', {type: 'error'}),
      notAudioFile: new Message('Not an audio file.', {type: 'error'}),
      audioTooLarge: new Message('Exceeds 3s limit.', {type: 'error'}),
    }
    this.playing = false
    this.recording = false
    this.connected = false
    this.mode = mode

    this.init()
  }

  init () {
    if (this.mode === 'normal') {
      this.initRecording()
      this.initClipboard()
    }

    // Connect to socket server, set event handlers and get current channel.
    this.connect(() => {
      this.events = new InstabuddyEvents(this)
      if (this.mode !== 'standalone') this.getChannel()
    })

    // Check for playback support.
    if (!this.supportsWebm()) {
      // this.handleError('noAudioPlayback')
      this.alerts.noAudioPlayback.show()
    }

    this.setDrop()
  }

  supportsWebm () {
    return !!this.$audio.canPlayType('audio/webm')
  }

  initClipboard() {
    // No clipboard support.
    if (!Clipboard.isSupported()) return

    // Clipboard supported!
    const clipboard = new Clipboard('i.share')
    clipboard.on('success', (e) => {
      this.alerts.clipboardCopyOk.show()
    })
  }

  initRecording () {
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
        if (this.mode === 'normal') this.$addButton.hide()
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
    // Check for websockets support.
    if (! 'WebSocket' in window) {
      alert(this.messages.noWebSocketSupport)
      return
    }

    let wsProto = 'ws'
    if (location.protocol === 'https:') wsProto = 'wss'
    this.ws = new ReconnectingWebSocket(`${wsProto}://${location.host}`)
    this.ws.binaryType = 'arraybuffer'

    this.ws.onopen = () => {
      if (this.connected) {
        log('WebSocket reconnected.')
        return
      }

      log('WebSocket connected.')
      this.connected = true
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
    // Share button.
    if (event.target.className === 'share' && !Clipboard.isSupported()) {
      this.openButtonUrl(event.target) // No clipboard support.
      return
    }

    // Check if we have an Instant button id.
    const id = event.target.dataset.id
    if (!id) return

    // Instant button.
    if (this.audioCollection[id].src) return this.play(id)
    this.record(id, event)
  }

  openButtonUrl (el) {
    const buttonUrl = el.dataset['clipboard-text']
    if (!buttonUrl) return

    window.open(buttonUrl)
  }

  record (id, event) {
    if (this.recording) return
    this.recording = true

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
      this.recording = false
    }, this.recordingTime)
  }

  sendBinary (buffer, {id, name, channel}) {
    const xhr = new XMLHttpRequest
    const url = `/binary/${channel}/${id}/${name}`
    xhr.open('POST', url, true)
    xhr.send(buffer)
  }

  saveButton (button) {
    console.log('SAVE', button)
    fetch(button.src).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          const meta = {
            id: button.id,
            name: button.name,
            channel: this.channel
          }
          console.log('send binary, meta:', meta)
          this.sendBinary(buffer, meta)
        })
    })
  }

  play (id) {
    if (this.playing || this.recording) return

    log('play', id)
    this.playing = true
    const $el = new El(`#btn-${id}`)

    $el.addClass('playing')
    let src = this.audioCollection[id].src
    this.$audio.src = src

    const timeoutId = setTimeout(() => {
      log('playing stopped')
      $el.removeClass('playing')
      this.playing = false
    }, this.recordingTime)

    // Start playback.
    this.sendPlay(id, src)
    try {
      this.$audio
        .play()
        .then(() => {})
        .catch(e => {
          log('Playback ERROR:', e)

          // Safari throws this error but plays OK.
          if (e.message === 'The operation is not supported.') return

          if (e.message === 'Failed to load because no supported source was found.') {
            this.handlePlaybackError('playbackNotFoundError', $el, timeoutId)
            return
          }

          this.handlePlaybackError('playbackError', $el, timeoutId)
        })
    } catch (e) {
      log(`ERROR PLAYING '${id}': ${src}`, e)
      this.handlePlaybackError('playbackError', $el, timeoutId)
    }
  }

  handlePlaybackError (alerId, $el, timeoutId) {
    this.alerts[alerId].show()
    clearTimeout(timeoutId)
    $el.removeClass('playing')
    this.playing = false
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

  onDrag (e) {
    e.preventDefault()
    e.stopPropagation()
    if (this.dragging) return

    clearTimeout(this.dragTimeout)
    this.$drop.show('flex')

    // console.log('DRAG', e)
    this.dragging = true
    setTimeout(() => this.dragging = false, 70)
    return false
  }

  onDragEnter (e) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  onDragLeave (e) {
    e.preventDefault()
    e.stopPropagation()

    // console.log('DRAG LEAVE')
    clearTimeout(this.dragTimeout)
    this.dragTimeout = setTimeout(() => this.$drop.hide(), 100)
    return false
  }

  onDrop (e) {
    e.stopPropagation()
    e.preventDefault()
    console.log('DROP', e)
    this.$drop.hide()

    if (e.dataTransfer.items) {
      const files = Array.from(e.dataTransfer.files)

      if (files.length === 0) {
        console.log('No files available.')
        return
      }

      e.dataTransfer.dropEffect = 'copy'
      console.log('FILES', files)

      files.map((file) => {
        console.log('FILE', file)
        this.addDroppedAudio(file)
      })
    }
    return false
  }

  addDroppedAudio (file) {
    console.log('Add dropped audio...', file)
    // Check if it's audio.
    if (!file.type.match(/audio/)) {
      console.error('Not audio.')
      this.alerts.notAudioFile.show()
      return
    }

    // Read audio data.
    const blob = window.URL.createObjectURL(file)
    const audio = new Audio()
    audio.addEventListener('loadedmetadata', (metadata) => {
      // console.log('METADATA', metadata)
      console.log('DURATION (seconds)', audio.duration)
      // window.URL.revokeObjectURL(blob)

      // Time limit.
      if (audio.duration > this.dropAudioDurationLimit) {
        console.error(`Audio duration is more than ${this.dropAudioDurationLimit} seconds.`)
        this.alerts.audioTooLarge.show()
        return
      }

      // Add button.
      const id = (new Date()).getTime()
      this.addButton(null, {id, name: file.name})
      this.audioCollection[id].src = blob
      this.saveButton(this.audioCollection[id])
    })
    audio.src = blob


    // const reader = new FileReader()
    // reader.onload = (data) => {
    //   console.log('FILE READ OK', data)
    // }
    // reader.readAsDataURL(file)

    // Check length.

    // Add new button with file data.
    console.log('Add new button with dropped audio!')
  }

  setDrop () {
    document.body.addEventListener('dragenter', e => this.onDragEnter(e), false)
    document.body.addEventListener('dragover', e => this.onDrag(e), false)
    document.body.addEventListener('dragleave', e => this.onDragLeave(e), false)
    document.body.addEventListener('drop', e => this.onDrop(e), false)
  }

  getRandomColor () {
    const total = this.colors.length
    const index = Math.round(Math.random() * total)
    return this.colors[index]
  }

  removeButton (event, id) {
    event.stopPropagation()
    if (!confirm('Delete this InstantButton?')) return
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
          <i
            title="Share" class="share"
            data-clipboard-text="${this.url}/play/${id}"
          >🔗</i>
          <i title="Delete" class="remove" onclick="app.removeButton(event, ${id})">⌫</i>
        </div>
      </div>
    `)

    this.addAudio(id, {id, name, color})

    return id
  }

  getButtonLink (event, id) {
    console.log('SHARE BUTTON', id)
    event.stopPropagation()
    event.preventDefault()

    const buttonUrl = `${this.url}/play/${id}`
    console.log(buttonUrl)

  }

  addAudio(id, button) {
    this.audioCollection[id] = button
  }
}

function log () {
  console.log('[ APP ]-->', ...arguments)
}

const app = new App(mode)
