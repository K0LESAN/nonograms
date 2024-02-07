import transformTemplate from '../helpers/transform-template';
import { controllerTime } from '../helpers/timer';
import handleClickOnCeil from './../handlers/game-handler';

export default function () {
  const template = JSON.parse(
    localStorage.getItem('k32d04sXgxnd312bd-currentGame')
  );
  const gameField = document.querySelector('.game-field');
  const localArr = transformTemplate(gameField, true);
  const length = localArr.length;

  controllerTime.stop();
  gameField.removeEventListener('mousedown', handleClickOnCeil);
  gameField.removeEventListener('mousemove', handleClickOnCeil);
  gameField.removeEventListener('touchstart', handleClickOnCeil);

  for (let i = 0; i < length; i++) {
    const subLength = localArr[i].length;

    for (let j = 0; j < subLength; j++) {
      localArr[i][j].setAttribute('data-status', template[i][j]);
    }
  }
}
