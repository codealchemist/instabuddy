class InstabuddyEvents {
  constructor (app) {
    this.app = app
  }

  channel ({type, data, error}) {
    this.log('channel:', data)
    if (error) throw new Error(error)

    if (!data || !data.buttons || !data.buttons.length) {
      this.log('EMPTY channel')
      return
    }

    // Add buttons.
    data.buttons.map((button) => {
      console.log('button:', button)
      const id = this.app.addButton(null, button)
      this.app.addAudio(id, button)
    })
  }

  buttonSaved ({type, data, error}) {
    if (error) {
      this.log('ERROR SAVING BUTTON', error)
      return
    }

    this.log('BUTTON SAVED', data)
  }

  log () {
    console.log('[ EVENTS ]-->', ...arguments)
  }

  play (src) {
    this.log('PLAY', src)
  }
}
