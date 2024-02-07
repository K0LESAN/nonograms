import actions from '../actions/actions';

let saveIsNotAllowed = false;

export default function (event) {
  const button = event.target.closest('.menu__item');
  const command = button?.getAttribute('data-action');
  const action = actions[command];

  if (!button || !action || (command === 'save' && saveIsNotAllowed)) {
    return;
  }

  saveIsNotAllowed = command === 'solution';

  action();
}
