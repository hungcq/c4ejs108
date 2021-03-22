let heading = document.getElementById('hd');

function callbackFunc() {
    heading.innerHTML = 'da click';
}

heading.addEventListener('click', function () {
    alert('da click');
});

// tạo 1 button ở trang HTML
// khi người dùng click button
// thêm 1 item mới vào list

// buoc 1: lay button, lay ra list
let button = document.getElementById("button");
let list = document.getElementById("list"); // ul
// buoc 2: add event listener cho button
// buoc 3: thay doi list o trong callback function
button.addEventListener("click", function (event) {
    list.innerHTML += `<li>new item</li>`;
    console.log(event);
});

let input = document.getElementById("input");
// bat su kien user bam phim enter
input.addEventListener("keypress", function (event) {
    console.log(event);
    // khi user bam phim enter
    if (event.keyCode === 13) {
        // lay ra value cua input
        let inputValue = input.value;
        list.innerHTML += `<li>${inputValue}</li>`;
    }
});