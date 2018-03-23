function f1() {
	var p = document.getElementById('out');
	var p2 = document.getElementById('out2');
	var i=0;
	while (i<50) { //условие, при котором цикл будет работать
		p.innerHTML+=i+ ' ';
		i++; //цикл будт идти от i=0 до i<50, т.е. от 0 до 49
	}
	// while (i<50) {
	// 	i++; //цикл сначала прирастит 1 к i=0 и пойдет до 50
	// 	p2.innerHTML+=i+' ';
	// }


}