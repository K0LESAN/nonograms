import { timeController } from './timer';
import handlerClickOnCell from './../handlers/game-handler';

function addNewRecord(addRecord, gameField) {
  if (!addRecord) {
    return;
  }

  const records = JSON.parse(localStorage.getItem('k32d04sXgxnd312bd-records'));

  if (!records) {
    return;
  }

  const newRecord = {};

  newRecord.name = gameField.getAttribute('data-current-template');
  newRecord.size = Math.sqrt(gameField.children.length) * 5;
  newRecord.time = timeController.minutes * 60 + timeController.seconds;

  while (records.length > 4) {
    records.shift();
  }

  records.push(newRecord);

  localStorage.setItem('k32d04sXgxnd312bd-records', JSON.stringify(records));
}

export default function (
  gameField,
  addHandlers = false,
  startTimer = false,
  addRecord = true
) {
  gameField ||= document.querySelector('.game-field');

  addNewRecord(addRecord, gameField);

  timeController.stop();

  if (startTimer) {
    timeController.preStart(gameField);
  }

  gameField.removeEventListener('mousedown', handlerClickOnCell);
  gameField.removeEventListener('mousemove', handlerClickOnCell);
  gameField.removeEventListener('touchstart', handlerClickOnCell);

  if (addHandlers) {
    gameField.addEventListener('mousedown', handlerClickOnCell);
    gameField.addEventListener('touchstart', handlerClickOnCell);
  }
}
