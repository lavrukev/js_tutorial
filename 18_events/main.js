var block = document.getElementById('one');

block.onclick = function() {
    this.style.background = 'green';
    this.onclick = null; // отменить событие
}

block.ondblclick = function () {
    this.style.background = 'red';
}

block.oncontextmenu = function() {
    this.style.background = 'blue';
    return false; // запретить контестное меню
}
// document.oncontextmenu = function() { // запретить контестное меню на странице
//     return false;
// }

block.onmouseenter = function() {
    console.log('in');
    this.style.background = 'gold';
    // return null;
}
block.onmouseleave = function () {
    this.style.background = '';
}