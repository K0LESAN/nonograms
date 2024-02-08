import { audioController } from '../helpers/play-sound';
import checkProgress from './changer-state-game';

function handler(event) {
  event.preventDefault();
}

function cursorMovementHandler(clickedCell, newStatus) {
  let preventElement = clickedCell;
  document.addEventListener('contextmenu', handler);

  return function handlerMove(event) {
    const cell = event.target.closest('.game-field__item');

    event.preventDefault();

    if (event.buttons === 0) {
      document.removeEventListener('mousemove', handlerMove);
      document.removeEventListener('contextmenu', handler);
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
      checkProgress();
    }
  };
}

export default function (event) {
  const cell = event.target.closest('.game-field__item');
  const deviceIsMobile = window.matchMedia(
    'screen and (hover: none) and (pointer: coarse)'
  ).matches;

  if (event.cancelable) {
    event.preventDefault();
  }

  if (!cell || (event.type.includes('mouse') && deviceIsMobile)) {
    return;
  }

  const currentStatus = Number(cell.getAttribute('data-status'));
  const isClicked = event.buttons === 1;
  let newStatus = null;

  if (deviceIsMobile) {
    newStatus = (currentStatus + 1) % 3;
  } else {
    newStatus = isClicked ? currentStatus % 2 ^ 1 : [2, 2, 0][currentStatus];
  }

  cell.setAttribute('data-status', newStatus);

  audioController(newStatus);

  if (!deviceIsMobile) {
    document.addEventListener(
      'mousemove',
      cursorMovementHandler(cell, newStatus)
    );
  }

  checkProgress();
}
