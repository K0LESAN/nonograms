import handlerClickOnCell from './../handlers/game-handler';
import { controllerTime } from '../helpers/timer';

export default function () {
  const gameField = document.querySelector('.game-field');

  for (const subgrid of gameField.children) {
    for (const cell of subgrid.children) {
      cell.setAttribute('data-status', 0);
    }
  }

  controllerTime.stop();
  controllerTime.preStart(gameField);
  gameField.removeEventListener('mousedown', handlerClickOnCell);
  gameField.removeEventListener('touchstart', handlerClickOnCell);
  gameField.addEventListener('mousedown', handlerClickOnCell);
  gameField.addEventListener('touchstart', handlerClickOnCell);
}
