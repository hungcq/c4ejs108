let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");

let counter = document.getElementById("counter");
let num = 0;
counter.innerHTML = num;

increaseButton.addEventListener("click", function () {
    num++;
    counter.innerHTML = num;
});

decreaseButton.addEventListener("click", function () {
    num--;
    counter.innerHTML = num;
});