import random from './actions/random-game';
import restart from './actions/restart-game';
import save from './actions/save-game';
import contrinueGame from './actions/continue-game';

export default {
  random,
  restart,
  save,
  continue: contrinueGame
};
