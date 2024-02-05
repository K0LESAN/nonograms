const minutesDOM = document.querySelector('.timer__minutes');
const secondsDOM = document.querySelector('.timer__seconds');
let minutes = 0;
let seconds = 0;

const timer = setInterval(() => {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  secondsDOM.textContent = String(seconds).padStart(2, '0');
  minutesDOM.textContent = String(minutes).padStart(2, '0');
}, 1000);

export default timer;
