import transformTemplate from '../helpers/transform-template';
import { controllerTime } from '../helpers/timer';
import stopGame from '../helpers/stop-game';

function assertsDeepEqual(firstArr, secondArr) {
  const length = firstArr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (firstArr[i][j] % 2 !== secondArr[i][j]) {
        return false;
      }
    }
  }

  return true;
}

export default function () {
  const gameField = document.querySelector('.game-field');
  const template = transformTemplate(gameField);
  const currentTemplate = JSON.parse(
    localStorage.getItem('k32d04sXgxnd312bd-currentGame')
  );

  if (!assertsDeepEqual(template, currentTemplate)) {
    return;
  }

  const modalWin = document.querySelector('.modal');
  const time = controllerTime.seconds + controllerTime.minutes * 60;

  modalWin.querySelector('.modal__seconds').textContent = time;
  modalWin.classList.add('open');

  stopGame();
}
