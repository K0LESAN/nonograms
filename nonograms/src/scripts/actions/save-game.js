import transformTemplate from '../helpers/transform-template';
import { controllerTime } from '../helpers/timer';

export default function () {
  const gameField = document.querySelector('.game-field');
  const length = gameField.children.length;
  const array = Array.from(gameField.children);
  const step = Math.sqrt(length);
  const template = [];
  const savedGame = {
    size: Math.sqrt(length) * 5,
    name: gameField.getAttribute('data-current-template')
  };

  let index = 0;

  while (index < length) {
    transformTemplate(template, array.slice(index, index + step));
    index += step;
  }
  console.log(gameField);
  savedGame.savedTemplate = document.querySelector('.game-field').innerHTML;
  savedGame.template = JSON.parse(
    localStorage.getItem('k32d04sXgxnd312bd-currentGame')
  );
  savedGame.minutes = controllerTime.minutes;
  savedGame.seconds = controllerTime.seconds;

  localStorage.setItem(
    'k32d04sXgxnd312bd-savedGame',
    JSON.stringify(savedGame)
  );
}
