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

checkbox.addEventListener("click", (event) => {
  if (checkbox.classList.contains("on")) {
    checkbox.setAttribute("aria-checked", "false");
  } else {
    checkbox.setAttribute("aria-checked", "true");
  }
  checkbox.classList.toggle("on");
});

// FIXME
// function switch() {
//   if(checkbox.attributes('aria-checked', "true")){
//     document.body.classList.add('darker')
//     document.body.classList.add('darker')
//   }
// }
