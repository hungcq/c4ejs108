let h1 = document.getElementById("hd");
h1.innerHTML = "danh sach";
let ul = document.getElementById("myUl");
ul.innerHTML += `<li>hihihihihi</li>`;

h1.addEventListener("click", function () {
  alert("Clicked");
});

let myInput = document.getElementById("my-input");
myInput.addEventListener("keypress", function (data) {
  console.log("Inputting...");
  console.log(data);
});

let inputs = document.getElementsByClassName("input-class");
// console.log(inputs[0].remove());

console.dir(h1);