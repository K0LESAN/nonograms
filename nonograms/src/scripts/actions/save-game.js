export default function () {
  const gameField = document.querySelector('.game-field');
  const savedGame = { savedTemplate: [], name: '' };

  for (const subgrid of gameField.children) {
    const line = [];

    for (const cell of subgrid.children) {
      line.push(cell.getAttribute('data-status') || 0);
    }

    savedGame.savedTemplate.push(line);
  }

  localStorage.setItem(
    'k32d04sXgxnd312bd-savedGame',
    JSON.stringify(savedGame)
  );
}
