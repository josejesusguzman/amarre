function moveElmRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

var btn_si = document.querySelector('#btn_si');
var btn_no = document.querySelector('#btn_no');
var modo_sexo_div = document.getElementsByClassName("modo_sexo")[0];

btn_no.addEventListener('mouseenter', function(e) { moveElmRandom(e.target); });

btn_si.addEventListener('click', function(e) { 
    alert('Sabía que dirías que SI. Casemonos ya, tengamos hijos. TE AMO! 💖') 

    modo_sexo_div.style.display = 'block';
    const audio = new Audio('modo_hot.mp3');
    audio.play();
});

btn_no.addEventListener('click', function(e) {
    const audio = new Audio('audio.mp3');
    audio.play();
    alert('¿Cómo de que no? 😡');
});