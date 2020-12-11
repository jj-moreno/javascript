const timer = document.querySelector('p');
let timerTotalMins;
let interval;
let secsPassed = 0;
let timeRemainingInSecs;

const getTimerTotalSecs = () => {
  return timerTotalMins * 60;
};

const getTimeRemainingInSecs = (secsPassed) => {
  return getTimerTotalSecs() - secsPassed;
};

const start = () => {
  if (!interval) {
    interval = setInterval(() => {
      secsPassed += 1;
      timeRemainingInSecs = getTimeRemainingInSecs(secsPassed);
      updateTime(timeRemainingInSecs);
      if (timeRemainingInSecs == 0) {
        stop(interval);
      }
    }, 1000);
  }
};

const updateTime = (timeRemainingInSecs) => {
  const mins = Math.floor(timeRemainingInSecs / 60);
  const secs = timeRemainingInSecs % 60;
  timer.textContent = `${
    mins < 10 ? prefixSingleDigitNumWithZero(mins) : mins
  }:${secs < 10 ? prefixSingleDigitNumWithZero(secs) : secs}`;
};

const prefixSingleDigitNumWithZero = (num) => {
  return `0${num}`;
};

const stop = () => {
  clearInterval(interval);
  interval = null;
};

const reset = () => {
  secsPassed = 0;
  updateTime(getTimeRemainingInSecs(secsPassed));
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

  updateTime(getTimeRemainingInSecs(secsPassed));
  addTimerButtonListeners();
};

init();
