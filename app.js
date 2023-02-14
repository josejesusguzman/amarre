// Define una función que asigna una posición aleatoria en la pantalla a un elemento HTML dado
function moveElmRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

// Selecciona dos elementos HTML con los elementos HTML #btn_si y #btn_no
var btn_si = document.querySelector('#btn_si');
var btn_no = document.querySelector('#btn_no');

// Selecciona un elemento HTML con la clase modo_sexto y lo almacena en la variable modo_sexto_div
var modo_sexto_div = document.getElementsByClassName("modo_sexto")[0];

// Añade un event listener al botón btn_no para activar la función moveElmRandom cuando el ratón entra al elemento
btn_no.addEventListener('mouseenter', function(e) { moveElmRandom(e.target); });

// Añade un event listener al botón btn_si que muestra un mensaje, muestra el elemento HTML modo_sexto_div, y reproduce nuestro archivo de audio
btn_si.addEventListener('click', function(e) { 
    alert('Sabía que dirías que SI. Casemonos ya, tengamos hijos. TE AMO! 💖') 
    modo_sexto_div.style.display = 'block';
    const audio = new Audio('modo_hot.mp3');
    audio.play();
});

// Añade un event listener al botón btn_no que reproduce un archivo de audio y muestra un mensaje
btn_no.addEventListener('click', function(e) {
    const audio = new Audio('audio.mp3');
    audio.play();
    alert('¿Cómo de que no? 😡');
});
