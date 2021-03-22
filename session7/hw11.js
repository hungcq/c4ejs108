// 11.2, 11.3
let button = document.getElementById("button");

let text = document.getElementById("text");

let input = document.getElementById("input");

button.addEventListener("click", function () {
    console.log("button clicked");
    text.innerHTML = input.value.toUpperCase();
});
