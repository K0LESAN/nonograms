export default function (size) {
  const gameField = document.querySelector('.game-field');
  const countSubgrids = (size / 5) ** 2;
  const countCells = 25;

  for (let i = 0; i < countSubgrids; i++) {
    const subgrid = document.createElement('div');
    subgrid.classList.add('game-field__subgrid');
    gameField.append(subgrid);

    for (let j = 0; j < countCells; j++) {
      const cell = document.createElement('div');
      cell.classList.add('game-field__item');
      subgrid.append(cell);
    }
  }
}
