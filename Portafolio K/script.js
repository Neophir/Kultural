// Obtener todas las cartas
var cartas = document.querySelectorAll('.carta');

// Agregar un evento de clic a cada carta
cartas.forEach(function(carta) {
  var titulo = carta.querySelector('.carta-titulo');
  
  // Agregar un evento de clic al título de la carta
  titulo.addEventListener('click', function() {
    
    // Alternar la clase "expandido" en la carta
    carta.classList.toggle('expandido');
  });
});

// Transicion 

window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});
