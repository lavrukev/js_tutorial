var radio = document.getElementsByName('prim');
document.getElementById('one').onclick = checkRadio;

for (var i=0; i<radio.length ;i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log(this.value);
    
}

function checkRadio() {
    for (var i=0; i<radio.length;i++) {
        if (radio[i].checked){
            alert('cheked' + ' ' + radio[i].value);
            break;
        }
    }
}