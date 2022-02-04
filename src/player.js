export default class Player {
  constructor(size, game) {
    this.position = 0
    this.size = size
    this.player = document.createElement('div')
    this.player.classList.add('player')
    this.player.style.width = this.size.width + 'px'
    this.player.style.height = this.size.height + 'px'
    this.game = game
    this.game.getNode().appendChild(this.player)
    this.setSensMove(10)

    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          this.move = 'left'
          break
        case 'ArrowRight':
          this.move = 'right'
          break
        case 'NumpadAdd':
          this.setSensMove(this.sensMove + 1)
          break
        case 'NumpadSubtract':
          this.setSensMove(this.sensMove - 1)
          break
        default:
          break
      }
    })
    document.addEventListener('keyup', () => {
      this.move = null
    })
  }

  moveLeft = () => {
    if (this.position > 0) {
      this.setPosition(this.position - 3 * this.sensMove)
    }
  }
  moveRight = () => {
    if (this.position < this.game.getWidth() - this.size.width) {
      this.setPosition(this.position + 3 * this.sensMove)
    }
  }

  setSensMove = (newSens) => {
    if (newSens > 0 && newSens <= 10) this.sensMove = newSens
    this.game.setSens(
      `Votre sensibilité est de ${this.sensMove}
      ${this.sensMove == 5 ? '(Moyen)' : ''}
      ${this.sensMove >= 8 ? '(Rapide)' : ''}
      ${this.sensMove <= 2 ? '(Lent)' : ''}
    `
    )
    return
  }

  setPosition = (position) => {
    if (position < 0) this.position = 0
    else if (position > this.game.getWidth() - this.size.width)
      this.position = this.game.getWidth() - this.size.width
    else this.position = position
    this.player.style.setProperty('transform', `translateX(${this.position}px)`)
  }
}
