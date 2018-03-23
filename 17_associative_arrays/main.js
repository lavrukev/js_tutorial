// http://w3.org.ua

// Задание 1. Создайте ассоциативный массив содержащий описание человека.Задайте поля: имя, возраст, пол, индивидуальный номер.Заполните массив.Выведите его в консоли.


var man = {
    "name" : "Paw",
    "age" : 29,
    "id" : "1234567890",
    "sex" : "male"
};

// console.log(man);
// console.log(man.name);
// console.log(man["name"]);

// Задание 2. Создайте ассоциативный массив содержащий описание человека.Задайте поля: имя, возраст, пол, индивидуальный номер.Заполните массив.Выведите его в консоли.
// Добавьте в массив метод, который будет рассчитывать год рождения человека исходя из его возраста и возвращать его.

var man2 = {
    "name": "Paw",
    "age": 29,
    "id": "1234567890",
    "sex": "male",
    "year" : function () {
        return 2017-this.age;
    }
};

console.log(man2.year());

// Задание 3. Создайте ассоциативный массив свойство mas которое содержит массив чисел(любого количества), добавьте метод, который выводит сумму чисел содержащихся в mas.

var m = {
    "mas" : [5, 6, 34, 12, 45],
    "sum" : function() {
        var sum = 0;
        for (var i=0; i<this.mas.length; i++) {
            sum = sum + this.mas[i];
        }
        return sum;
    }
}
console.log(m.sum());


// Задание 4. Создайте массив, ключами которого служат артикулы товара(любое пятизначное число), а значениями– ассоциативный массив, который содержит название товара, стоимость, вес единицы товара, ссылку на изображение, отметку о доступности товара на складе.

// Выведите массив в консоль.Выведите на страницу HTML описание первого товара.

var goods = {
    "plate": {
        "id": 707860,
        "name": "cool plate",
        "country": "UA",
        "img": "https://www.ikea.com/ru/ru/images/products/vardagen-tarelka-belyj__0417121_PE586303_S4.JPG",
        "sklad" : "yes"

    },
    "fork": {
        "id": 519188,
        "name": "cool fork",
        "country": "RU",
        "img": "https://i2.rozetka.ua/goods/1338566/2-91-0003_images_1338566067.jpg"
    }
};

var out = '';
for (var key in goods) {
    out += 'Name: ' + goods[key].name + '<br>';
    out += 'Country: ' + goods[key].country + '<br>';
    out += '<img src="'+goods[key].img+'">';
}
document.getElementById('out').innerHTML = out;

// Задание 5. Дан ассоциативный массив.Выведите его на страницу html в формате ключ— значение.Каждый элемент с новой строки.


var vivod2 = document.getElementById('out2');
var day = {
	"d1": "Понедельник",
	"d2": "Вторник",
	"d3": "Среда",
	"d4": "Четверг"
};
for (var key in day) {
    vivod2.innerHTML += key + ' - ' + day[key] + '<br>';
}

// Задание 6. Дан ассоциативный массив.Выведите его на страницу html в формате ключ ** * значение.Каждый элемент с новой строки.

var arr = {
    "k1": "17w4",
    "k2": "1sfsg7",
    "k3": "17nd",
    "k16": "1237",
    "k14": "1w37",
    "3k1": "1wrw7"
};

for (var key in arr) {
    vivod3.innerHTML += key + ' - ' + arr[key] + '<br>';
}

// Задание 7. Дан ассоциативный массив.Выведите его в консоль.Преобразуйте строку и сохраните в LocalStorage под именем mass.Считайте из LocalStorage запись mass.Выведите в консоль.Преобразуйте в массив и повторите вывод в консоль.

var array = {
    "k1": "17w4",
    "k2": "1sfsg7",
    "k3": "17nd",
    "k16": "1237",
    "k14": "1w37",
    "3k1": "1wrw7"
};
console.log(array);

var sObj = JSON.stringify(array);
localStorage.setItem("mass", sObj);
localStorage.object;
var retObj = JSON.parse(localStorage.getItem("mass"));
console.log("mass");

