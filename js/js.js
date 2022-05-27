function chbg(color) {
    document.getElementById('me-content').style.backgroundColor = color;
}

function show() {
    var txt = document.getElementById('dlcv');

    if(txt) {
        txt.style.display = 'block';
    }
}

function hide() {
    var txt = document.getElementById('dlcv');

    if(txt) {
        txt.style.display = 'none';
    }
}