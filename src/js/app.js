class App {
  constructor () {
    this.$buttons = new El('#buttons')
    this.$audio = document.querySelector('audio')
    this.elements = {}
    this.audioCollection = {}
    this.recorder = null
    this.recordingTime = 3000 // ms
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

    navigator.mediaDevices.getUserMedia({audio:true})
      .then(stream => {
        this.recorder = new MediaRecorder(stream)
      })
      .catch(e => console.log(e))
  }

  onButtonClick (event) {
    // console.log('button clicked', event)
    const id = event.target.dataset.id
    if (this.audioCollection[id]) return this.play(id)
    this.record(id, event)
  }

  record (id, event) {
    console.log('recording started', id)
    const $el = new El(event.target)
    $el.addClass('recording')
    this.elements[id] = $el

    const audioChunks = []
    this.recorder.start()
    this.recorder.ondataavailable = e => {
      audioChunks.push(e.data)
      if (this.recorder.state !== "inactive") return

      let blob = new Blob(audioChunks, {type:'audio/x-mpeg-3'})
      this.audioCollection[id] = URL.createObjectURL(blob)
    }

    setTimeout(() => {
      this.recorder.stop()
      console.log('recording stopped', id)
      this.elements[id].removeClass('recording')
      this.elements[id].removeClass('empty')
    }, this.recordingTime)
  }

  play (id) {
    console.log('play', id)
    this.elements[id].addClass('playing')
    this.$audio.src = this.audioCollection[id]
    this.$audio.play()

    setTimeout(() => {
      console.log('playing stopped')
      this.elements[id].removeClass('playing')
    }, this.recordingTime)
  }

  download (id) {
    // audioDownload.href = recordedAudio.src
    // audioDownload.download = 'mp3'
    // audioDownload.innerHTML = 'download'
  }

  onKey (code) {
    console.log('key:', code)
  }

  getRandomColor () {
    const total = this.colors.length
    const index = Math.round(Math.random() * total)
    return this.colors[index]
  }

  addButton (event) {
    event.stopPropagation()
    const name = prompt('Button name?')
    if (!name || !name.trim()) return

    const id = (new Date()).getTime()
    const color = this.getRandomColor()
    this.$buttons.prependHtml(`
      <div data-id="${id}" class="btn empty ${color}">
        <p class="ellipsis">${name}</p>
      </div>
    `)
  }
}

const app = new App()
