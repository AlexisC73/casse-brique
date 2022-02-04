import _ from 'lodash'
import './page.scss'
import Game from './game'

const game = new Game(document.querySelector('.game'), {
  width: 900,
  height: 600,
})

let fps = 0

const movePlayer = () => {
  switch (game.player.move) {
    case 'left':
      game.player.moveLeft()
      break
    case 'right':
      game.player.moveRight()
      break
  }
  window.requestAnimationFrame(movePlayer)
}

requestAnimationFrame(movePlayer)
