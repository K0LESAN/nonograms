import actions from './actions';

export default function (event) {
  const button = event.target.closest('.menu__item');
  const action = actions[button?.getAttribute('data-action')];

  if (!button || !action) {
    return;
  }

  action();
}
