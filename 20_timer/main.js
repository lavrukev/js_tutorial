var sdvig = 0;
var test = document.getElementById('test');

//setinterval (function name, time)

function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig= sdvig+3;
}
var timer = setInterval(move, 50);


