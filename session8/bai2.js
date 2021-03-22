// get DOM element
let input = document.getElementById("input");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let timerHeading = document.getElementById("timerHeading");

let num = 0;
let intervalId = 0;

// bat su kien nguoi dung click
// start button
startButton.addEventListener("click", function () {
    // lay gia tri cua o input
    // chuyen thanh so, gan cho bien num
    num = Number(input.value);
    // tao interval dem nguoc
    // clear interval cu di
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        // check num > 0
        if (num > 0) {
            num--;
            timerHeading.innerHTML = num;
        }
    }, 1000);
});

// logic khi nguoi dung an nut stop
stopButton.addEventListener("click", function () {
    // dung dong ho dem nguoc
    // bang ham clearInterval
    clearInterval(intervalId);
    timerHeading.innerHTML = "Stopped";
});