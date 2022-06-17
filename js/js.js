function chbg(color) {
  document.getElementById("me-content").style.backgroundColor = color;
}

function show() {
  let txt = document.getElementById("dlcv");

  if (txt) {
    txt.style.display = "inline-block";
    txt.translate = (-500, 0);
    txt.duration = 1200;
  }
}

function hide() {
  let txt = document.getElementById("dlcv");

  if (txt) {
    txt.style.display = "none";
  }
}

function chbgSK1(color) {
  document.getElementById("front").style.backgroundColor = color;
}

function chbgSK2(color) {
  document.getElementById("graphisme").style.backgroundColor = color;
}

// hover portfolio
let newStyle = document.querySelectorAll(".portfolio-content");
let empty = document.querySelectorAll(".empty-block");

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

// menu burger
const burger = document.querySelector(".menu");
const menu = document.querySelector(".menu-links");
const navBg = document.querySelector("nav");

burger.addEventListener("click", navMenu);

function navMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  navBg.classList.toggle("active");
}

//
const checkbox = document.querySelector("button");
let root = document.documentElement;

checkbox.addEventListener("click", (event) => {
  if (checkbox.classList.contains("on")) {
    checkbox.setAttribute("aria-checked", "false");
    root.style.setProperty("--white", "#fff");
    root.style.setProperty("--dark", "#202020");
  } else {
    checkbox.setAttribute("aria-checked", "true");
    root.style.setProperty("--white", "#372703");
    root.style.setProperty("--dark", "#feefd0da");
  }
  checkbox.classList.toggle("on");
});

//FIXME
// checkbox.addEventListener("click", function () {
//   if (root.style.getPropertyValue("--white", "#372703")) {
//   } else {
//   }
// });
