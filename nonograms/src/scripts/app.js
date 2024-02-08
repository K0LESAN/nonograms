import { startNewTemplate, renderOptions } from './handlers/select';
import handlerClickOnCell from './handlers/game-handler';
import menuHandler from './handlers/menu';
import generatorTemplates from './helpers/template-generator';
import { timeController } from './helpers/timer';
import { audios, audioController } from './helpers/play-sound';
import templates from './data/templates';

function topMenuGenerator() {
  const wrapper = document.createElement('div');
  const timer = document.createElement('div');
  const themeSwitch = document.createElement('div');
  const minutes = document.createElement('span');
  const seconds = document.createElement('span');
  const themeSwitchItem = document.createElement('div');
  const soundButton = document.createElement('div');
  const isDark = window.matchMedia(
    'screen and (prefers-color-scheme: dark)'
  ).matches;

  wrapper.classList.add('app__wrapper');
  timer.classList.add('timer');
  soundButton.classList.add('sound-button');
  themeSwitch.classList.add('theme-switch');
  minutes.classList.add('timer__minutes');
  seconds.classList.add('timer__seconds');
  themeSwitchItem.classList.add('theme-switch__item');

  wrapper.append(timer, soundButton, themeSwitch);
  timer.append(minutes, ':', seconds);
  themeSwitch.append(themeSwitchItem);

  if (isDark) {
    themeSwitch.classList.add('theme-switch_active');
  }

  themeSwitch.addEventListener('click', (event) => {
    if (!event.target.closest('.theme-switch')) {
      return;
    }

    document.body.classList.toggle('dark');
  });

  soundButton.addEventListener('click', (event) => {
    const button = event.target.closest('.sound-button');

    if (!button) {
      return;
    }

    const isOff = button.hasAttribute('data-off');
    audioController.isCancel = !isOff;

    if (isOff) {
      button.textContent = 'on';
      button.removeAttribute('data-off');
    } else {
      button.textContent = 'off';
      button.setAttribute('data-off', '');
    }
  });

  minutes.textContent = '00';
  seconds.textContent = '00';
  soundButton.textContent = 'on';

  timeController.minutesDOM = minutes;
  timeController.secondsDOM = seconds;

  return wrapper;
}

function nonogramGenerator() {
  const nonogram = document.createElement('div');
  const topHints = document.createElement('div');
  const leftHints = document.createElement('div');
  const gameField = document.createElement('div');

  nonogram.classList.add('nonogram');
  topHints.classList.add('top-hints', 'nonogram__top-hints');
  leftHints.classList.add('left-hints', 'nonogram__left-hints');
  gameField.classList.add('game-field', 'nonogram__game-field');

  gameField.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
  gameField.addEventListener('mousedown', handlerClickOnCell);
  gameField.addEventListener('touchstart', handlerClickOnCell);
  nonogram.append(topHints, leftHints, gameField);

  return nonogram;
}

function menuGenerator() {
  const menu = document.createElement('div');
  const buttonSaveGame = document.createElement('div');
  const buttonRestartGame = document.createElement('div');
  const buttonContinueGame = document.createElement('div');
  const buttonRandomGame = document.createElement('div');
  const buttonSolutionGame = document.createElement('div');
  const buttonScoreGame = document.createElement('div');

  menu.classList.add('menu');
  buttonSaveGame.classList.add('menu__item');
  buttonRestartGame.classList.add('menu__item');
  buttonContinueGame.classList.add('menu__item');
  buttonRandomGame.classList.add('menu__item');
  buttonSolutionGame.classList.add('menu__item');
  buttonScoreGame.classList.add('menu__item');

  menu.addEventListener('click', menuHandler, {
    passive: true
  });

  buttonSaveGame.textContent = 'Save game';
  buttonRestartGame.textContent = 'Reset game';
  buttonContinueGame.textContent = 'Continue last game';
  buttonRandomGame.textContent = 'Random game';
  buttonSolutionGame.textContent = 'Solution';
  buttonScoreGame.textContent = 'High score table';

  buttonSaveGame.setAttribute('data-action', 'save');
  buttonRestartGame.setAttribute('data-action', 'restart');
  buttonContinueGame.setAttribute('data-action', 'continue');
  buttonRandomGame.setAttribute('data-action', 'random');
  buttonSolutionGame.setAttribute('data-action', 'solution');
  buttonScoreGame.setAttribute('data-action', 'score-table');

  menu.append(
    buttonSaveGame,
    buttonRestartGame,
    buttonContinueGame,
    buttonRandomGame,
    buttonSolutionGame,
    buttonScoreGame
  );

  return menu;
}

function selectGenerator() {
  const select = document.createElement('div');
  const selectSizes = document.createElement('select');
  const selectTemplates = document.createElement('select');
  const selectButton = document.createElement('div');

  select.classList.add('select');
  selectSizes.classList.add('select-sizes');
  selectTemplates.classList.add('select-templates');
  selectButton.classList.add('select__button');

  selectButton.textContent = 'Select a template';

  select.append(selectSizes, selectTemplates, selectButton);

  select.addEventListener('click', startNewTemplate, {
    passive: true
  });
  select.addEventListener('change', renderOptions, {
    passive: true
  });

  for (const size in templates) {
    const optionSize = document.createElement('option');
    optionSize.classList.add('select-sizes__item');
    optionSize.textContent = size;
    optionSize.value = size;
    selectSizes.append(optionSize);
  }

  for (const { name } of templates['5x5']) {
    const optionTemplate = document.createElement('option');
    optionTemplate.classList.add('select-sizes__item');
    optionTemplate.textContent = name;
    optionTemplate.value = name;
    selectTemplates.append(optionTemplate);
  }

  return select;
}

function startTemplateGenerator() {
  const defaultSize = 5;
  const templatesGame = templates[`${defaultSize}x${defaultSize}`];
  const { name, template } =
    templatesGame[Math.floor(Math.random() * templatesGame.length)];

  generatorTemplates(defaultSize, template, name);
}

function generatorModalWin() {
  const modalWin = document.createElement('div');
  const modalWrapper = document.createElement('div');
  const modalText = document.createElement('div');
  const modalSeconds = document.createElement('span');
  const modalQuitButton = document.createElement('div');

  modalWin.classList.add('modal');
  modalWrapper.classList.add('modal__wrapper');
  modalText.classList.add('modal__text');
  modalSeconds.classList.add('modal__seconds');
  modalQuitButton.classList.add('modal__button');

  modalQuitButton.textContent = 'Exit';

  modalWin.append(modalWrapper);
  modalWrapper.append(modalText, modalQuitButton);
  modalText.append(
    `Great! You have solved the nonogram in `,
    modalSeconds,
    ` seconds!`
  );

  modalQuitButton.addEventListener('click', (event) => {
    if (event.target !== modalQuitButton) {
      return;
    }

    modalWin.classList.remove('open');
  });

  return modalWin;
}

function generatorModalScoreTable() {
  const modalScore = document.createElement('div');
  const modalWrapper = document.createElement('div');
  const modalTable = document.createElement('table');
  const tableCaption = document.createElement('caption');
  const modalTableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableNameCell = document.createElement('td');
  const tableSizeCell = document.createElement('td');
  const tableTimeCell = document.createElement('td');
  const modalTableBody = document.createElement('tbody');
  const modalQuitButton = document.createElement('div');

  modalScore.classList.add('modal-score');
  modalWrapper.classList.add('modal-score__wrapper');
  modalTable.classList.add('modal-score__table');
  tableCaption.classList.add('modal-score__caption');
  modalTableHead.classList.add('modal-score__thead');
  tableHeadRow.classList.add('modal-score__thead');
  tableNameCell.classList.add('modal-score__cell');
  tableSizeCell.classList.add('modal-score__cell');
  tableTimeCell.classList.add('modal-score__cell');
  modalTableBody.classList.add('modal-score__tbody');
  modalQuitButton.classList.add('modal-score__button');

  modalQuitButton.textContent = 'Exit';
  tableCaption.textContent = 'High score table';
  tableNameCell.textContent = 'Name';
  tableSizeCell.textContent = 'Size';
  tableTimeCell.textContent = 'Time';

  modalScore.append(modalWrapper);
  modalWrapper.append(modalTable, modalQuitButton);
  modalTable.append(tableCaption, modalTableHead, modalTableBody);
  tableHeadRow.append(tableNameCell, tableSizeCell, tableTimeCell);
  modalTableHead.append(tableHeadRow);

  modalQuitButton.addEventListener('click', (event) => {
    if (event.target !== modalQuitButton) {
      return;
    }

    modalScore.classList.remove('open');
  });

  return modalScore;
}

function main() {
  const app = document.createElement('div');
  const container = document.createElement('div');
  const timerAndThemeSwitcher = topMenuGenerator();
  const modalWin = generatorModalWin();
  const modalScore = generatorModalScoreTable();
  const nonogram = nonogramGenerator();
  const menu = menuGenerator();
  const select = selectGenerator();
  const captionGameField = document.createElement('div');
  const isDark = window.matchMedia(
    'screen and (prefers-color-scheme: dark)'
  ).matches;

  app.classList.add('app');
  container.classList.add('container');
  captionGameField.classList.add('caption-game-field');

  app.append(container, modalWin, modalScore, ...Object.values(audios));
  container.append(
    timerAndThemeSwitcher,
    captionGameField,
    nonogram,
    menu,
    select
  );

  if (isDark) {
    document.body.classList.add('dark');
  }

  document.body.append(app);

  startTemplateGenerator();

  const selectSizes = document.querySelector('.select-templates').options;
  const length = selectSizes.length;
  const currentTemplate = document
    .querySelector('.game-field')
    .getAttribute('data-current-template');

  for (let index = 0; index < length; index++) {
    if (selectSizes[index].value === currentTemplate) {
      selectSizes.selectedIndex = index;
      break;
    }
  }
}

window.addEventListener('load', main, {
  passive: true,
  once: true
});
