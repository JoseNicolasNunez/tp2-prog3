function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, ingrese valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = `Tu IMC es: ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    resultado.textContent += " (Bajo peso)";
  } else if (imc < 24.9) {
    resultado.textContent += " (Peso normal)";
  } else if (imc < 29.9) {
    resultado.textContent += " (Sobrepeso)";
  } else {
    resultado.textContent += " (Obesidad)";
  }

  resultado.style.color = "white";
}
