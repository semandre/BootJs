var menuElem1 = document.getElementById('sweeties1');
var titleElem1 = menuElem1.querySelector('.title1');

var menuElem2 = document.getElementById('sweeties2');
var titleElem2 = menuElem2.querySelector('.title2');

var menuElem4 = document.getElementById('sweeties4');
var titleElem4 = menuElem4.querySelector('.title4');

titleElem1.onclick = function() {
    menuElem1.classList.toggle('open1');
};

titleElem2.onclick = function() {
    menuElem2.classList.toggle('open2');
};

titleElem4.onclick = function() {
    menuElem4.classList.toggle('open4');
};