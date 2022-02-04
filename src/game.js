import Player from './player'

export default class Game {
  constructor(el, size) {
    this.game = el
    this.size = size
    this.game.style.width = this.size.width + 'px'
    this.game.style.height = this.size.height + 'px'
    this.sensEl = document.querySelector('.sens>span')
    this.player = new Player(
      {
        width: 100,
        height: 15,
      },
      this
    )
  }
  getNode = () => {
    return this.game
  }
  getWidth = () => {
    return this.size.width
  }
  setSens = (sens) => {
    this.sensEl.innerHTML = sens
  }
}
