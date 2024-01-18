const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const millisecond = document.querySelector('.millisecond');


// const start = document.querySelector('.start');
// const stop = document.querySelector('.stop');
// const reset = document.querySelector('.reset');


let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let millisecondCount = 0;


let timer = true;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hourCount = 0;
    minuteCount = 0;
    secondCount = 0;
    millisecondCount = 0;

    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    millisecond.innerHTML = "00";
}



function stopwatch(){

    if(timer==true){
        millisecondCount++;
        if(millisecondCount==100){
            secondCount++;
            millisecondCount = 0;
        }
        if(secondCount==60){
            minuteCount++;
            secondCount = 0;
        }
        if(minuteCount==60){
            hourCount++;
            minuteCount = 0;
            secondCount = 0;
        }

        let hourstr = hourCount;
        let minstr = minuteCount;
        let secstr = secondCount;
        let millistr = millisecondCount;

        if(millisecondCount < 10){
            millistr = "0" + millisecondCount;
        }
        if(secondCount < 10){
            secstr = "0" + secondCount;
        }
        if(minuteCount < 10){
            minstr = "0" + minuteCount;
        }
        if(hourCount < 10){
            hourstr = "0" + hourCount;
        }

        hour.innerHTML = hourstr;
        minute.innerHTML = minstr;
        second.innerHTML = secstr;
        millisecond.innerHTML = millistr;
        setTimeout("stopwatch()", 10);
    }
}