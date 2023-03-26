const cartas = document.querySelectorAll('.carta');

cartas.forEach(carta => {
  carta.addEventListener('mouseover', () => {
    carta.classList.add('carta-hover');
  });

  carta.addEventListener('mouseout', () => {
    carta.classList.remove('carta-hover');
  });
});


// Transicion 

window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});
