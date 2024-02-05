import actions from './actions';

const menu = document.querySelector('.menu');

function main(event) {
  const button = event.target.closest('.menu__item');
  const action = actions[button?.getAttribute('data-action')];

  if (!button || !action) {
    return;
  }

  action();
}

menu.addEventListener('click', main, {
  passive: true
});
