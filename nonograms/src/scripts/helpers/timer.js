const controllerTime = {
  start: function () {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(() => {
      this.seconds++;

      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }

      this.secondsDOM.textContent = String(this.seconds).padStart(2, '0');
      this.minutesDOM.textContent = String(this.minutes).padStart(2, '0');
    }, 1000);
  },
  stop: function () {
    clearInterval(this.timer);
    this.timer = null;
    this.seconds = 0;
    this.minutes = 0;
    this.secondsDOM.textContent = '00';
    this.minutesDOM.textContent = '00';
  },
  preStart: function (DOMelement, seconds = 0, minutes = 0) {
    const handler = (event) => {
      if (!event.target.closest('.game-field__item')) {
        return;
      }

      this.start();
      event.currentTarget.removeEventListener('mousedown', handler);
      event.currentTarget.removeEventListener('touchstart', handler);
    };

    this.seconds = seconds;
    this.minutes = minutes;
    this.secondsDOM.textContent = String(this.seconds).padStart(2, '0');
    this.minutesDOM.textContent = String(this.minutes).padStart(2, '0');

    DOMelement.addEventListener('mousedown', handler);
    DOMelement.addEventListener('touchstart', handler);
  },
  timer: null,
  secondsDOM: null,
  minutesDOM: null,
  seconds: 0,
  minutes: 0
};

export { controllerTime };
