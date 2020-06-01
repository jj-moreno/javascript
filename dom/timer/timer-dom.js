console.log("time to start the timer!");

const timer = document.querySelector('p');
let timeInSecs = 0;
let counter = 0;

const interval = setInterval(startTimer, 1000);

function convertTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec}`;
}

function startTimer() {

    updateTime();    
}


function updateTime() {
    counter++;
    timer.textContent = `${convertTime(timeInSecs - counter)}`;

    if (counter === timeInSecs) {
        clearInterval(interval);
    }
}

function stopTimer() {
    timer.textContent = '0:00';
    clearInterval(interval);
}

function resetTimer() {
    timer.textContent = `${timeInSecs / 60}:00`;
    counter = 0;
}

function setEventListeners() {
    document.querySelector("#start").addEventListener('click', startTimer);
    document.querySelector("#stop").addEventListener('click', stopTimer);
    document.querySelector("#reset").addEventListener('click', resetTimer);
}

function init() {
    setEventListeners();
    const numOfMins = prompt('How many minutes would you like to set for your timer?');
    if(parseInt(numOfMins)) {
        timeInSecs = numOfMins * 60;
        timer.textContent = `${numOfMins}:00`;
    } else {
        alert('Invalid number!');
    }
}

init();