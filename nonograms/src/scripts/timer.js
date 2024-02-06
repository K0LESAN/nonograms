const controllerTime = {
  start: function () {
    this.timer = setInterval(() => {
      const minutesDOM = document.querySelector('.timer__minutes');
      const secondsDOM = document.querySelector('.timer__seconds');

      this.seconds++;

      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }

      minutesDOM.textContent = String(this.minutes).padStart(2, '0');
      secondsDOM.textContent = String(this.seconds).padStart(2, '0');
    }, 1000);
  },
  init: function () {
    clearInterval(this.timer);
    this.seconds = 0;
    this.minutes = 0;
  },
  timer: null,
  seconds: 0,
  minutes: 0
};

controllerTime.start();

export { controllerTime };
