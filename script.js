document.getElementById("reserva-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    alert("¡Reserva realizada por " + nombre + " para la fecha " + fecha + "!");
  });

  function animarImagen(element) {
    element.classList.add('animacion-imagen');
    
    setTimeout(function() {
      element.classList.remove('animacion-imagen');
    }, 1000);
  }
  