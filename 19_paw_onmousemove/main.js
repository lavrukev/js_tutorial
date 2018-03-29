document.onmousemove = function() {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/paw-20.png" id="paw">');
    var paw =document.getElementById('paw');
    paw.style.position = 'fixed';

    document.onmousemove = function (event) {
        paw.style.left = event.clientX + 20 + 'px';
        paw.style.top = event.clientY + 20 + 'px';

    }
}