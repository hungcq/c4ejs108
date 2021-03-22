// get 2 button
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");

// get counter
let counter = document.getElementById("counter");
let num = 0;
counter.innerHTML = num;

// su kien nguoi dung bam nut +
increaseButton.addEventListener("click", function () {
    // tang so len
    num++;
    // gan vao text
    counter.innerHTML = num;
});

// su kien nguoi dung bam nut -
decreaseButton.addEventListener("click", function () {
    num--;
    counter.innerHTML = num;
});