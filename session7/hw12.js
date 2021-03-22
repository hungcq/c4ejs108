const items = [
    "Backpack",
    "MiBand watch",
    "Ring"
];

let list = document.getElementById("list");
for (let i = 0; i < items.length; i++) {
    list.innerHTML += `<li>${items[i]}<button class="removeButton">Remove</button></li>`
}

let input = document.getElementById("input");
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
    items.push(input.value);
    list.innerHTML += `<li>${input.value}
    <button class="removeButton">Remove</button>
    </li>`;
    input.value = "";
    let buttons = document.getElementsByClassName("removeButton");
    for (const button of buttons) {
        button.addEventListener("click", function () {
            this.parentNode.remove();
        });
    }
});

let buttons = document.getElementsByClassName("removeButton");
for (const button of buttons) {
    button.addEventListener("click", function () {
        this.parentNode.remove();
    });
}