import { controllerTime } from './../timer';

export default function () {
  const gameField = document.querySelector('.game-field');
  const minutes = document.querySelector('.timer__minutes');
  const seconds = document.querySelector('.timer__seconds');

  for (const subgrid of gameField.children) {
    for (const cell of subgrid.children) {
      cell.setAttribute('data-status', 0);
    }
  }

  minutes.textContent = '00';
  seconds.textContent = '00';
  controllerTime.init();
  controllerTime.start();
}
