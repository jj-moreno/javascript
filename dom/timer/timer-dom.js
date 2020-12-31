const start = () => {
  const timeRemainingInSecs = getTimeRemainingInSecs();
  const timer = getTimer(timeRemainingInSecs);
  addStopButtonListener(timer);
  addResetButtonListener(timer);
};

const getTimeRemainingInSecs = () => {
  const timer = document.querySelector('#timer-display').textContent;
  const splitTimer = timer.split(':');
  const mins = parseInt(splitTimer[0]);
  const secs = parseInt(splitTimer[1]);
  return calcTotalSecs(mins, secs);
};

const calcTotalSecs = (mins, secs) => {
  return mins * 60 + secs;
};

const getTimer = (timeRemainingInSecs) => {
  return setInterval(() => {
    timeRemainingInSecs -= 1;
    if (timeRemainingInSecs >= 0) {
      updateTime(timeRemainingInSecs);
    } else {
      stop(this);
    }
  }, 1000);
};

const updateTime = (timeRemainingInSecs) => {
  const mins = Math.floor(timeRemainingInSecs / 60);
  const secs = timeRemainingInSecs % 60;
  formatTime(mins, secs);
};

const formatTime = (mins, secs) => {
  document.querySelector('p').textContent = `${
    mins < 10 ? prefixSingleDigitNumWithZero(mins) : mins
  }:${secs < 10 ? prefixSingleDigitNumWithZero(secs) : secs}`;
};

const prefixSingleDigitNumWithZero = (num) => {
  return `0${num}`;
};

const stop = (interval) => {
  clearInterval(interval);
};

const addStopButtonListener = (timer) => {
  document
    .getElementById('stop')
    .addEventListener('click', stop.bind(null, timer));
};

const reset = (timer) => {
  const resetTimerTotalSecs = getInitTimerTotalSecs();
  updateTime(resetTimerTotalSecs);
  stop(timer);
  start(resetTimerTotalSecs);
};

const getInitTimerTotalSecs = () => {
  const urlParams = getUrlParams();
  const timerTotalSecs = calcTotalSecs(urlParams['mins'], urlParams['secs']);
  return timerTotalSecs;
};

const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    mins: parseInt(urlParams.get('mins')),
    secs: parseInt(urlParams.get('secs')),
  };
};

const addResetButtonListener = (timer) => {
  timeRemainingInSecs = document
    .getElementById('reset')
    .addEventListener('click', reset.bind(null, timer));
};

const init = () => {
  const timerTotalSecs = getInitTimerTotalSecs();
  updateTime(timerTotalSecs);
  addStartButtonListener();
};

const addStartButtonListener = () => {
  document.getElementById('start').addEventListener('click', start);
};

init();
