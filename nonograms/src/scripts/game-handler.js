import { audioController } from './play-sound';

function cursorMovementHandler(clickedCell, newStatus) {
  let preventElement = clickedCell;

  return function handlerMove(event) {
    const cell = event.target.closest('.game-field__item');

    event.preventDefault();

    if (event.buttons === 0) {
      document.removeEventListener('mousemove', handlerMove);
      return;
    }

    if (preventElement === event.target) {
      return;
    }

    preventElement = event.target;

    if (!cell) {
      return;
    }

    const prevStatus = Number(cell.getAttribute('data-status')) || 0;

    if (prevStatus !== newStatus) {
      audioController(newStatus);
      cell.setAttribute('data-status', newStatus);
    }
  };
}

function handlerClickOnCell(event) {
  const cell = event.target.closest('.game-field__item');
  const deviceIsMobile = window.matchMedia(
    'screen and (hover: none) and (pointer: coarse)'
  ).matches;

  event.preventDefault();

  if (!cell || (event.type.includes('mouse') && deviceIsMobile)) {
    return;
  }

  const currentStatus = Number(cell.getAttribute('data-status'));
  const newStatus =
    event.buttons === 1 ? currentStatus % 2 ^ 1 : [2, 2, 0][currentStatus];

  cell.setAttribute(
    'data-status',
    !deviceIsMobile ? newStatus : (currentStatus + 1) % 3
  );

  audioController(!deviceIsMobile ? newStatus : (currentStatus + 1) % 3);

  if (!deviceIsMobile) {
    document.addEventListener(
      'mousemove',
      cursorMovementHandler(cell, newStatus)
    );
  }
}

const gameField = document.querySelector('.game-field');

gameField.addEventListener('mousedown', handlerClickOnCell);
gameField.addEventListener('touchstart', handlerClickOnCell);
gameField.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
