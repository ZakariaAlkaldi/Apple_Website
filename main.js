let img = document.querySelector(".img");
let container = document.querySelector(".container");
let button = document.querySelector(".button");

function phones(phone) {
  img.src = phone;
}
function colors(color) {
  container.style.background = color;
  button.style.color = color;
}

// mobile
let ul = document.querySelector(".container header ul");
let toggle = document.getElementById("toggle");

toggle.onclick = () => {
  ul.classList.toggle("hide");
};
