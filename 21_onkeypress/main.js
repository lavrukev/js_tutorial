var out = document.getElementById('out');
document.getElementById('in').onkeypress = function () {
    if (event.keyCode < 48 || event.keyCode > 57) {
        out.innerHTML += 'Не цифра. Вы ввели ' + event.key;
        return false; // не позволит ввести не фицру
    }
}

// var out2 = document.getElementById('out');
// document.getElementById('in').onkeypress = function () {
//     if (event.keyCode > 48 || event.keyCode < 57) {
//         out.innerHTML += 'Не буква. Вы ввели ' + event.key;
//         // return false; // не позволит ввести не фицру
//     }
// }