import templateGenerator from '../template-generator';
import { controllerTime } from '../timer';

export default function () {
  const data = localStorage.getItem('k32d04sXgxnd312bd-savedGame');
  const gameField = document.querySelector('.game-field');

  if (!data) {
    return;
  }

  const { size, template, savedTemplate, name, minutes, seconds } =
    JSON.parse(data);

  controllerTime.stop();

  localStorage.setItem(
    'k32d04sXgxnd312bd-currentGame',
    JSON.stringify(template)
  );

  templateGenerator(size, template, name, false);
  controllerTime.preStart(gameField, seconds, minutes);
  gameField.innerHTML = savedTemplate;
}
