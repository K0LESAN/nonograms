import crossSrc from '../data/audios/cross.mp3';
import fillSrc from '../data/audios/fill.mp3';
import noneSrc from '../data/audios/none.mp3';
import winSrc from '../data/audios/win.mp3';

let isPlayed = false;

function createAudio(src) {
  const audio = document.createElement('audio');
  audio.src = src;

  return audio;
}

const audios = {
  fill: createAudio(fillSrc),
  cross: createAudio(crossSrc),
  none: createAudio(noneSrc),
  win: createAudio(winSrc)
};

function audioController(action) {
  if (audioController.isCancel) {
    return;
  }

  if (action === 'win') {
    audios[action]?.load();
    audios[action]?.play();
    return;
  }

  if (isPlayed) {
    return;
  }

  isPlayed = true;

  const statusToAction = {
    0: 'none',
    1: 'fill',
    2: 'cross'
  };

  if (action in statusToAction) {
    action = statusToAction[action];
  }

  audios[action]?.load();
  audios[action]?.play();

  setTimeout(() => {
    isPlayed = false;
  }, 115);
}

export { audios, audioController };
