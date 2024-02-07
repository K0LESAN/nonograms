import { controllerTime } from './timer';
import handlerClickOnCell from './../handlers/game-handler';

export default function (gameField, addHandlers = false, startTimer = false) {
  gameField ||= document.querySelector('.game-field');

  controllerTime.stop();

  if (startTimer) {
    controllerTime.preStart(gameField);
  }

  gameField.removeEventListener('mousedown', handlerClickOnCell);
  gameField.removeEventListener('mousemove', handlerClickOnCell);
  gameField.removeEventListener('touchstart', handlerClickOnCell);

  if (addHandlers) {
    gameField.addEventListener('mousedown', handlerClickOnCell);
    gameField.addEventListener('touchstart', handlerClickOnCell);
  }
}
