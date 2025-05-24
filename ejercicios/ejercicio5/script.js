function calcular() {
  const A = parseFloat(document.getElementById("valorA").value);
  const B = parseFloat(document.getElementById("valorB").value);
  const C = parseFloat(document.getElementById("valorC").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C < 0 || C > A) {
    resultado.textContent = "Por favor, ingrese valores válidos. A debe ser mayor que C.";
    resultado.style.color = "red";
    return;
  }

  const alturaTriangulo = A - C;
  const areaTriangulo = (B * alturaTriangulo) / 2;
  const areaRectangulo = B * C;
  const areaTotal = areaTriangulo + areaRectangulo;

  resultado.innerHTML = `
    <strong>Resultados:</strong><br>
    Área del triángulo: ${areaTriangulo.toFixed(2)}<br>
    Área del rectángulo: ${areaRectangulo.toFixed(2)}<br>
    <strong>Área total: ${areaTotal.toFixed(2)}</strong>
  `;
  resultado.style.color = "#ffffff";
}
