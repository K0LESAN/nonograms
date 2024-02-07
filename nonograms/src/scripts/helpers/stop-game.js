import { timeController } from './timer';
import handlerClickOnCell from './../handlers/game-handler';

export default function (gameField, addHandlers = false, startTimer = false) {
  gameField ||= document.querySelector('.game-field');

  timeController.stop();

  if (startTimer) {
    timeController.preStart(gameField);
  }

  gameField.removeEventListener('mousedown', handlerClickOnCell);
  gameField.removeEventListener('mousemove', handlerClickOnCell);
  gameField.removeEventListener('touchstart', handlerClickOnCell);

  if (addHandlers) {
    gameField.addEventListener('mousedown', handlerClickOnCell);
    gameField.addEventListener('touchstart', handlerClickOnCell);
  }
}
