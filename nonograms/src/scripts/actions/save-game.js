import { timeController } from '../helpers/timer';

export default function () {
  const gameField = document.querySelector('.game-field');
  const length = gameField.children.length;
  const savedGame = {
    size: Math.sqrt(length) * 5,
    name: gameField.getAttribute('data-current-template')
  };

  savedGame.savedTemplate = gameField.innerHTML;
  savedGame.template = JSON.parse(
    localStorage.getItem('k32d04sXgxnd312bd-currentGame')
  );
  savedGame.minutes = timeController.minutes;
  savedGame.seconds = timeController.seconds;

  localStorage.setItem(
    'k32d04sXgxnd312bd-savedGame',
    JSON.stringify(savedGame)
  );
}
