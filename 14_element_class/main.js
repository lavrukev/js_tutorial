var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');

console.log(p);
//  p.onclick = f1;  не приводит к результату
for (var i=0; i<p.length; i++) {
p[i].onclick = f1;
}
for (var i=0; i<one.length; i++) {
one[i].onclick = f2;
}

 function f1() {
    //  alert('hello');
    // console.log(this);
    this.style.background = 'pink';

 }
 // this указывает елемент, на котором произошло событие

 function f2() {
     this.style.fontWeight = 'bold';
 }