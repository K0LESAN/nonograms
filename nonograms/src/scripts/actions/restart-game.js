import stopGame from '../helpers/stop-game';

export default function () {
  const gameField = document.querySelector('.game-field');

  for (const subgrid of gameField.children) {
    for (const cell of subgrid.children) {
      cell.setAttribute('data-status', 0);
    }
  }

  stopGame(gameField, true, true);
}
