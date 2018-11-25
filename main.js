const btnStart = document.querySelector('button.start')
const btnClear = document.querySelector('button.clear')
const btnReset = document.querySelector('button.reset')
const spanHour = document.querySelector('.hour')
const spanMinute = document.querySelector('.minute')
const spanSecond = document.querySelector('.second')
const h1 = document.querySelector('h1');
const ol = document.querySelector('.results');

let sec = 0;
let min = 0;
let h = 0;
let active = false;
let idI;


const timer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Pauza';
        btnStart.classList.add('stop')
        idI = setInterval(start, 10);
    } else {
        // active = !active;
        // btnStart.textContent = 'Start';
        // btnStart.classList.remove('stop')
        // clearInterval(idI)

        const liResult = document.createElement('li');
        liResult.textContent = h1.textContent;
        ol.appendChild(liResult);
    }

}

const start = () => {
    sec++;
    sec <= 9 ? spanSecond.textContent = "0" + sec : spanSecond.textContent = sec;

    if (sec == 99) {
        min++;
        min <= 9 ? spanMinute.textContent = "0" + min : spanMinute.textContent = min;
        sec = 0;

        if (min == 59) {
            h++;
            h <= 9 ? spanHour.textContent = "0" + h : spanHour.textContent = h;
            min = -1;

        }
    }
}

const reset = () => {
    active = false;
    clearInterval(idI)
    sec = 0;
    min = 0;
    h = 0;
    btnStart.textContent = 'Start';
    btnStart.classList.remove('stop');
    spanSecond.textContent = "00";
    spanMinute.textContent = "00";
    spanHour.textContent = "00";

}

const clear = () => {
    ol.textContent = "";

}
btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset)
btnClear.addEventListener('click', clear)
// window.addEventListener('mousemove', start)
// stop.addEventListener('click', stopTime)