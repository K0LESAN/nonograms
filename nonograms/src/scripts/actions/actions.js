import contrinueGame from './continue-game';
import restart from './restart-game';
import random from './random-game';
import save from './save-game';
import solution from './solution-game';
import scoreTable from './score-table';

export default {
  random,
  restart,
  save,
  continue: contrinueGame,
  solution,
  'score-table': scoreTable
};
