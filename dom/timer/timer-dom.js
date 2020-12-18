const start = () => {
  const timeRemainingInSecs = getTimeRemainingInSecs();
  const timer = interval(timeRemainingInSecs);
  addStopButtonListener(timer);
  addResetButtonListener(timer);
};

const getTimeRemainingInSecs = () => {
  const timer = document.querySelector('#timer-display').textContent;
  const splitTimer = timer.split(':');
  const mins = parseInt(splitTimer[0]);
  const secs = parseInt(splitTimer[1]);
  return getTotalSecs(mins, secs);
};

const getTotalSecs = (mins, secs) => {
  return mins * 60 + secs;
};

const interval = (timeRemainingInSecs) => {
  return setInterval(() => {
    timeRemainingInSecs -= 1;
    updateTime(timeRemainingInSecs);
  }, 1000);
};

const updateTime = (timeRemainingInSecs) => {
  if (timeRemainingInSecs >= 0) {
    const mins = Math.floor(timeRemainingInSecs / 60);
    const secs = timeRemainingInSecs % 60;
    formatTime(mins, secs);
  } else {
    clearInterval(this);
  }
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
  const resetTimerTotalSecs = getTimerTotalSecsInit();
  updateTime(resetTimerTotalSecs);
  stop(timer);
  start(resetTimerTotalSecs);
};

const addResetButtonListener = (timer) => {
  timeRemainingInSecs = document
    .getElementById('reset')
    .addEventListener('click', reset.bind(null, timer));
};

const init = () => {
  const timerTotalSecs = getTimerTotalSecsInit();
  updateTime(timerTotalSecs);
  addStartButtonListener();
};
const getTimerTotalSecsInit = () => {
  const urlParams = getUrlParams();
  const timerTotalSecs = getTotalSecs(urlParams['mins'], urlParams['secs']);
  return timerTotalSecs;
};

const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    mins: parseInt(urlParams.get('min')),
    secs: parseInt(urlParams.get('sec')),
  };
};

const addStartButtonListener = () => {
  document.getElementById('start').addEventListener('click', start);
};

init();
