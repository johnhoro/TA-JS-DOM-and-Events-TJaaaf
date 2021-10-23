let first = document.querySelector(".first");
let second = document.querySelector(".second");

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

first.addEventListener("click", function () {
  first.style.backgroundColor = "#" + randomColor();
});

second.addEventListener("mousemove", function () {
  second.style.backgroundColor = "#" + randomColor();
});
