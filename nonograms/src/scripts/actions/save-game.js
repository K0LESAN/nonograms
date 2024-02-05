export default function () {
  const gameField = document.querySelector('.game-field');
  const savedGame = {
    size: Math.sqrt(gameField.children.length) * 5,
    template: [],
    name: gameField.getAttribute('data-current-template')
  };

  for (const subgrid of gameField.children) {
    const line = [];

    for (const cell of subgrid.children) {
      line.push(cell.getAttribute('data-status') || 0);
    }

    savedGame.template.push(line);
  }

  localStorage.setItem(
    'k32d04sXgxnd312bd-savedGame',
    JSON.stringify(savedGame)
  );
}
