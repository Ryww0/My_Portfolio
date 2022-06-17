// hover DLCV
let txt = document.getElementById("dlcv");
// Hover portfolio
let newStyle = document.querySelectorAll(".portfolio-content");
let empty = document.querySelectorAll(".empty-block");
// Menu Burger
const burger = document.querySelector(".menu");
const menu = document.querySelector(".menu-links");
const navBg = document.querySelector("nav");
// Switch changement de thème
const checkbox = document.querySelector("button");
let root = document.documentElement;

// Hover DLCV
function chbg(color) {
  document.getElementById("me-content").style.backgroundColor = color;
}
function show() {
  if (txt) {
    txt.style.display = "inline-block";
    txt.translate = (-500, 0);
    txt.duration = 1200;
  }
}
function hide() {
  if (txt) {
    txt.style.display = "none";
  }
}

// Hover compétences
function chbgSK1(color) {
  document.getElementById("front").style.backgroundColor = color;
}
function chbgSK2(color) {
  document.getElementById("graphisme").style.backgroundColor = color;
}

// Hover portfolio
newStyle.forEach((div) => {
  div.addEventListener("mouseover", function (event) {
    div.classList.add("portfolio-content-hover");
  });
});
empty.forEach((div) => {
  div.addEventListener("mouseover", function (event) {
    div.classList.add("portfolio-content-hover-nope");
  });
});
newStyle.forEach((div) => {
  div.addEventListener("mouseout", function (event) {
    div.classList.remove("portfolio-content-hover");
  });
});

// Menu burger
burger.addEventListener("click", navMenu);

function navMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  navBg.classList.toggle("active");
}

// Switch changement de thème
checkbox.addEventListener("click", (event) => {
  if (checkbox.classList.contains("on")) {
    checkbox.setAttribute("aria-checked", "false");
    root.style.setProperty("--fore", "#fff");
    root.style.setProperty("--back", "#202020");
  } else {
    checkbox.setAttribute("aria-checked", "true");
    root.style.setProperty("--fore", "#372703");
    root.style.setProperty("--back", "#feefd0da");
  }
  checkbox.classList.toggle("on");
});
