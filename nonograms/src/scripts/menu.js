import actions from './actions';

function selectAction(event) {
  const button = event.target.closest('.menu__item');
  const action = actions[button?.getAttribute('data-action')];

  if (!button || !action) {
    return;
  }

  action();
}

function main() {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', selectAction, {
    passive: true
  });
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    main();
  },
  {
    passive: true,
    once: true
  }
);
