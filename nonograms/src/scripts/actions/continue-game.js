import templateGenerator from '../template-generator';
import { controllerTime } from '../timer';

export default function () {
  const data = localStorage.getItem('k32d04sXgxnd312bd-savedGame');

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
  controllerTime.start(seconds, minutes);
  document.querySelector('.game-field').innerHTML = savedTemplate;
}
