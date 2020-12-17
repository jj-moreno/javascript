const getUrlParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const timerMins = parseInt(urlParams.get('min'));
  const timerSecs = parseInt(urlParams.get('sec'));
  return {
    mins: timerMins,
    secs: timerSecs,
  };
};

const getTotalSecs = (mins, secs) => {
  return mins * 60 + secs;
};

const getTimer = () => {
  return document.querySelector('#timer-display').textContent;
};

const getTimeRemainingInSecs = () => {
  const timer = getTimer();
  const splitTimer = timer.split(':');
  const mins = parseInt(splitTimer[0]);
  const secs = parseInt(splitTimer[1]);
  return getTotalSecs(mins, secs);
};

const start = () => {
  const timeRemainingInSecs = getTimeRemainingInSecs();
  const timer = interval(timeRemainingInSecs);
  addStopButtonListener(timer);
};

const interval = (timerTotalSecs) => {
  let timeRemainingInSecs = timerTotalSecs;
  return setInterval(() => {
    timeRemainingInSecs -= 1;
    updateTime(timeRemainingInSecs);
  }, 1000);
};

const addStopButtonListener = (timer) => {
  document
    .getElementById('stop')
    .addEventListener('click', stop.bind(null, timer));
};

const stop = (interval) => {
  clearInterval(interval);
};

const reset = () => {
  updateTime(getTotalSecs());
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

const init = () => {
  const urlParams = getUrlParams();
  const timerTotalSecs = getTotalSecs(urlParams['mins'], urlParams['secs']);
  updateTime(timerTotalSecs);
  addStartButtonListener();
  addResetButtonListener(timerTotalSecs);
};

const addStartButtonListener = () => {
  document.getElementById('start').addEventListener('click', start);
};

const addResetButtonListener = (timerTotalSecs) => {
  document
    .getElementById('reset')
    .addEventListener('click', reset.bind(null, timerTotalSecs));
};

init();
