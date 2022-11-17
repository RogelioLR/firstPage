// Funcion de Posicion Aleatoria
function randomPosition(x) {
    x.style.position = 'absolute';
    x.style.top = Math.random() * (window.innerHeight - x.offsetHeight) + 'px';
    x.style.left = Math.random() * (window.innerWidth - x.offsetWidth) + 'px';
}

// Botones
let buttonOne = document.getElementById("resUno");
let buttonTwo = document.getElementById("resDos");
// Div
let divSpin = document.getElementsByClassName("modoSpin")[0];

buttonTwo.addEventListener('mouseenter', function(y) {randomPosition(y.target)});
buttonOne.addEventListener('click', function(y) {
    alert("¿Quieres Aprender mas de Fisica? Suscribeteeeee ");
    divSpin.style.display = 'block';
    const cancion = new Audio('img/Bad Bunny - Tarot.mp3');
    cancion.play();
})