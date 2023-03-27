/*
  Practice
  - Random Background Color
*/

let colorCode = document.querySelector(".color-code");
let btn = (document.querySelector(".btn").onclick = changeBgColor);

function changeBgColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
}
