function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();
  const resultado = document.getElementById("resultado");

  let mensaje = "";
  let valido = true;

  if (nombre === "" || nombre.length > 50) {
    mensaje += "El nombre es inválido. ";
    valido = false;
  }

  if (apellido === "" || apellido.length > 50) {
    mensaje += "El apellido es inválido. ";
    valido = false;
  }

  if (isNaN(edad) || edad < 0) {
    mensaje += "La edad no puede ser negativa. ";
    valido = false;
  } else if (edad < 18) {
    mensaje += "Debe ser mayor de edad. ";
    valido = false;
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    mensaje += "La altura debe estar entre 0 y 230 cm. ";
    valido = false;
  }

  if (correo === "" || !correo.includes("@")) {
    mensaje += "El correo electrónico no es válido. ";
    valido = false;
  }

  if (valido) {
    resultado.textContent = "Todos los datos son válidos.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = mensaje;
    resultado.style.color = "red";
  }
}
