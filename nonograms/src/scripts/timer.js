const controllerTime = {
  start: function (seconds = 0, minutes = 0) {
    while (!this.minutesDOM) {
      this.minutesDOM = document.querySelector('.timer__minutes');
    }

    while (!this.secondsDOM) {
      this.secondsDOM = document.querySelector('.timer__seconds');
    }

    this.seconds = seconds;
    this.minutes = minutes;
    this.minutesDOM.textContent = String(minutes).padStart(2, '0');
    this.secondsDOM.textContent = String(seconds).padStart(2, '0');

    this.timer = setInterval(() => {
      this.seconds++;

      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }

      this.minutesDOM.textContent = String(this.minutes).padStart(2, '0');
      this.secondsDOM.textContent = String(this.seconds).padStart(2, '0');
    }, 1000);
  },
  stop: function () {
    clearInterval(this.timer);
    this.seconds = 0;
    this.minutes = 0;
    (this.secondsDOM || {}).textContent = '00';
    (this.minutesDOM || {}).textContent = '00';
  },
  timer: null,
  secondsDOM: document.querySelector('.timer__minutes'),
  minutesDOM: document.querySelector('.timer__seconds'),
  seconds: 0,
  minutes: 0
};

export { controllerTime };
