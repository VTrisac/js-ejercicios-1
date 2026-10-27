// Ejercicio 2: contador de clics
const btnContar = document.getElementById('btn-contar');
const contador = document.getElementById('contador');
let clics = 0;

btnContar.addEventListener('click', () => {
  clics++;
  contador.textContent = `Clics: ${clics}`;
});
