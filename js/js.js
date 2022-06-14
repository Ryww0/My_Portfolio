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
let newStyle = document.querySelector(".main-block");
let newStyle2 = document.querySelector(".link-block");

function potfolioHover() {
  newStyle.classList.add("portfolio-content-hover");
  newStyle2.classList.add("portfolio-content-hover");
}
function potfolioOut() {
  newStyle.classList.remove("portfolio-content-hover");
  newStyle2.classList.remove("portfolio-content-hover");
}
