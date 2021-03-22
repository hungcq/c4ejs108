// lay button
let button = document.getElementById("button");
// console.dir(button);

// dom object text
let text = document.getElementById("text");

// dom object input
let input = document.getElementById("input");

// bat su kien nguoi dung bam button
// let inputContent = input.value;
button.addEventListener("click", function () {
    console.log("button clicked");
    // lay input content tai thoi diem button duoc click
    let inputContent = input.value;
    console.log(inputContent);
    // gan noi dung input cho text
    text.innerHTML = inputContent.toUpperCase();
    console.log("da gan input content cho text");
});
