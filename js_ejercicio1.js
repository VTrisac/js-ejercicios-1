// Ejercicio 1: cambiar el color de fondo a uno aleatorio en cada clic
const btnColor = document.getElementById('btn-color');
const colorActual = document.getElementById('color-actual');

function colorAleatorio() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex}`;
}

btnColor.addEventListener('click', () => {
  const color = colorAleatorio();
  document.body.style.backgroundColor = color;
  colorActual.textContent = `Color actual: ${color}`;
});
