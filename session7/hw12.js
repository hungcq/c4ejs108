const items = [
    "Backpack",
    "MiBand watch",
    "Ring"
];

// render list content
let list = document.getElementById("list");
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    list.innerHTML += `<li>${item}
    <button class="removeButton">Remove</button>
    </li>`
}

loadRemoveButtons();

// logic add item moi
// lay cac dom element can thiet
let input = document.getElementById("input");
let addButton = document.getElementById("addButton");
// add su kien nguoi dung click addButton
addButton.addEventListener("click", function () {
    items.push(input.value);
    list.innerHTML += `<li>${input.value}
    <button class="removeButton">Remove</button>
    </li>`;
    console.log(list.innerHTML);
    // clear input
    input.value = "";
    // chay logic xoa list item
    loadRemoveButtons();
});

// logic load remove button
function loadRemoveButtons() {
    let buttons = document.getElementsByClassName("removeButton");
    // duyet qua list
    for (const removeButton of buttons) {
        // voi item trong list
        removeButton.addEventListener("click", function () {
            // lay li (parent node)
            // xoa no
            this.parentNode.remove();
        });
    }
}