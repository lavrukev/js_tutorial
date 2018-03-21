document.getElementById('r1').oninput = cssGenerator;
document.getElementById('top').oninput = cssTopLeft;
document.getElementById('bottom').oninput =cssTopRight;
document.getElementById('left').oninput = cssBottomLeft;
document.getElementById('right').oninput = cssBottomRight;

// выношу как глобальную переменную, что бы не прописывать каждый раз в новой функции
var div = document.getElementById('test'); //прямоугольник
var out = document.getElementById('out'); // textarea


function cssGenerator() {
    div.style.borderRadius = this.value + 'px';
    out.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
    out.innerHTML += 'border-radius: ' + this.value + 'px';

}
function cssTopLeft() {
    div.style.borderTopLeftRadius = this.value +'px';
    out.innerHTML = 'border-radius: top-left: ' + this.value + 'px';
}
function cssTopRight() {
    div.style.borderTopRightRadius = this.value +'px';
    out.innerHTML = 'border-radius: top-left: ' + this.value + 'px';
}
function cssBottomLeft() {
    div.style.borderBottomLeftRadius = this.value + 'px';
    out.innerHTML = 'border-radius: top-left: ' + this.value + 'px';
}
function cssBottomRight() {
    div.style.borderBottomRightRadius = this.value + 'px';
    out.innerHTML = 'border-radius: top-left: ' + this.value + 'px';
}