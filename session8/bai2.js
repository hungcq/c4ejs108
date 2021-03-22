let input = document.getElementById("input");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");

let timerHeading = document.getElementById("timerHeading");
let num = 0;
let intervalId = 0;

startButton.addEventListener("click", function () {
    num = input.value;
    intervalId = setInterval(function () {
        if (num > 0) {
            timerHeading.innerHTML = num;
            num--;
        }
    }, 1000);
});

stopButton.addEventListener("click", function () {
    clearInterval(intervalId);
    timerHeading.innerHTML = "Stopped"
});