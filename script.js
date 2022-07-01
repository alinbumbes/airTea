'use strict'
navigator.geolocation.getCurrentPosition(
    function (positie) {
        console.log(positie);
        console.log('you said yes');
    }
    ,
    function () {
        console.log('not found man')
    }
);


const btn = document.querySelector('#showEv');
btn.addEventListener('click', function (e) {
    console.log(e);
    const { path, x, y } = e;
    console.log(typeof path);
    console.log(path);

    if (x === e.x) {
        console.log("x din destructuring este egal cu x din event");

    }
    else {
        console.log("fuck")
    }
});

//---------------------------- timer --------------------------

const labelTimer = document.querySelector('#labelTimer');
const message = document.querySelector('#countdown-end');
let inputValue = document.querySelector('#timer-value');
const triggerTimer = document.querySelector('#trigger-timer');
let stateEnd = false;
triggerTimer.addEventListener('click', function(){
    stateEnd = false;
    startLogOutTimer(inputValue.value)
    
})

const startLogOutTimer = function (t) {
    let time = t;
  

    const timer = setInterval(() => {
        const min = Math.trunc(time / 60);
        const sec = time % 60;
        console.log(`${time} = ${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`)
        labelTimer.textContent = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`
        time--;

        if (time <= -1) {
            stateEnd = true;
            console.log(stateEnd);
            clearInterval(timer);
            console.log("time's up!!!");
        }
    }, 1000);
}