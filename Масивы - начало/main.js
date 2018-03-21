var m = [];
var m1 = [99, 33, 'hello'];
console.log(m1);

// вывести все елементы масива на страницу - запускаем цикл
// for (i=0; i<m1.length; i++) {
// 	document.getElementById('out').innerHTML+=m1[i]+ '<br>';
// }


function massOut() {
    var p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < m1.length; i++) {
        str += i + ' -- ' + m1[i] + '<br>';
    }
    p.innerHTML = str;
}

massOut();

function p1() { //добавляем в массив елемент, который вводит пользователь
    var i1 = document.getElementById('i1').value;
    m1.push(i1);
    massOut();
}

function p2() { // рор - убирает последний елемент масива
    m1.pop();
    massOut();
}