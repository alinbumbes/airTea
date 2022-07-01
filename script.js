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
const labelTimer = document.querySelector('#labelTimer');
const message = document.querySelector('.message');
const startLogOutTimer = function () {

    let time = 11;
    const timer = setInterval(() => {
        const min = Math.trunc(time / 60);
        const sec = time % 60;
        labelTimer.textContent = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec};`
        time--;
        console.log(time);

        if (time <= -1) {
            clearInterval(timer);
            console.log("time's up!!!");
            message.textContent= "Bang !!!";
        }
    }, 1000);


}

startLogOutTimer();
