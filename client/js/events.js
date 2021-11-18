import El from './el'

export default class InstabuddyEvents {
  constructor (app) {
    this.app = app
  }

  channel ({ type, data, error }) {
    this.log('channel:', data)
    if (error) throw new Error(error)

    if (!data || !data.buttons || !data.buttons.length) {
      this.log('EMPTY channel')
      return
    }

    // Add buttons.
    data.buttons.map(button => {
      console.log('button:', button)
      const id = this.app.addButton(null, button)
      this.app.addAudio(id, button)
    })
  }

  buttonSaved ({ type, data, error }) {
    if (error) {
      this.log('ERROR SAVING BUTTON', error)
      return
    }

    this.log('BUTTON SAVED', data)
  }

  log () {
    console.log('[ EVENTS ]-->', ...arguments)
  }

  play ({ type, data, error }) {
    const { channel, id, src } = data
    this.log(`BROADCAST PLAY @${channel}:`, src)

    // TODO: Filter channels on the backend.
    // Play audio for current channel only.
    if (this.app.channel !== channel) return

    // Don't interrupt recording nor playback.
    if (this.app.playing || this.app.recording) return

    const $el = new El(`#btn-${id}`)
    if (!$el.exists()) return

    this.app.$audio.src = src
    this.app.$audio.play()
    $el.addClass('playing')

    setTimeout(() => {
      this.log('BROADCAST PLAYING stopped')
      $el.removeClass('playing')
    }, this.app.recordingTime)
  }
}
