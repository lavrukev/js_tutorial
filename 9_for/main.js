function f1() {
	var p = document.getElementById('out');
	var p2 = document.getElementById('out2');


	//цикл с заданым количеством повторений
	for (var i= 1; i<100; i++) {
		p.innerHTML+=i + ' ';
	}
	for (var i=0; i<=100; i=i+2) {  //увеличение шага цикла на 2 единицы
		p2.innerHTML+=i + ' ';
	}
	
}