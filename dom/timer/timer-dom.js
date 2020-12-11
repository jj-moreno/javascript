const timer = document.querySelector('p');
let timerTotalMins;
let timeRemainingInSecs;
let interval;
let secsPassed = 0;

const getTimerTotalSecs = () => {
  return timerTotalMins * 60;
};

const getTimeRemainingInSecs = (secsPassed) => {
  return getTimerTotalSecs() - secsPassed;
};

const start = () => {
  interval = setInterval(() => {
    secsPassed += 1;
    timeRemainingInSecs = getTimeRemainingInSecs(secsPassed);
    timer.textContent = timeRemainingInSecs;
    if (timeRemainingInSecs < 0) {
      stop(interval);
    }
  }, 1000);
};

const stop = () => {
  clearInterval(interval);
};

const reset = () => {
  secsPassed = 0;
  timer.textContent = timerTotalMins;
};

const addTimerButtonListeners = () => {
  document.getElementById('start').addEventListener('click', start);
  document.getElementById('stop').addEventListener('click', stop);
  document.getElementById('reset').addEventListener('click', reset);
};

const init = () => {
  while (!parseInt(timerTotalMins)) {
    timerTotalMins = prompt('how many minutes for timer?');
  }
  timer.textContent = timerTotalMins;
  addTimerButtonListeners();
};

init();
