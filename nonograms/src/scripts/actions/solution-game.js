import transformTemplate from '../helpers/transform-template';
import stopGame from '../helpers/stop-game';

export default function () {
  const template = JSON.parse(
    localStorage.getItem('k32d04sXgxnd312bd-currentGame')
  );
  const gameField = document.querySelector('.game-field');
  const localArr = transformTemplate(gameField, true);
  const length = localArr.length;

  stopGame(gameField, false, false, false);

  for (let i = 0; i < length; i++) {
    const subLength = localArr[i].length;

    for (let j = 0; j < subLength; j++) {
      localArr[i][j].setAttribute('data-status', template[i][j]);
    }
  }
}
