function resetGameField(event) {
  const button = event.target.closest('.menu__item');

  if (!button || button.getAttribute('data-action') !== 'restart') {
    return;
  }

  const gameField = document.querySelector('.game-field');
  const minutes = document.querySelector('.timer__minutes');
  const seconds = document.querySelector('.timer__seconds');

  for (const subgrid of gameField.children) {
    for (const cell of subgrid.children) {
      cell.setAttribute('data-status', 0);
    }
  }

  minutes.textContent = '00';
  seconds.textContent = '00';
}

function main() {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', resetGameField, {
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
