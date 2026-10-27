// Ejercicio 8: contador de palabras y caracteres en tiempo real
const texto = document.getElementById('texto');
const numPalabras = document.getElementById('num-palabras');
const numCaracteres = document.getElementById('num-caracteres');

texto.addEventListener('input', () => {
  const valor = texto.value;
  const palabras = valor.trim() === '' ? 0 : valor.trim().split(/\s+/).length;
  const caracteres = valor.replace(/\s/g, '').length; // sin espacios ni saltos de línea
  numPalabras.textContent = palabras;
  numCaracteres.textContent = caracteres;
});
