// Ejercicio 7: generador de contraseñas aleatorias
const formPass = document.getElementById('form-pass');
const longitud = document.getElementById('longitud');
const password = document.getElementById('password');
const errorPass = document.getElementById('error-pass');

const LETRAS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMEROS = '0123456789';
const SIMBOLOS = '!@#$%^&*()-_=+[]{};:,.<>?';
const TODOS = LETRAS + NUMEROS + SIMBOLOS;

const caracterAleatorio = (cadena) => cadena[Math.floor(Math.random() * cadena.length)];

function generar(n) {
  // Garantiza al menos una letra, un número y un símbolo
  const chars = [caracterAleatorio(LETRAS), caracterAleatorio(NUMEROS), caracterAleatorio(SIMBOLOS)];
  while (chars.length < n) chars.push(caracterAleatorio(TODOS));
  // Mezcla (Fisher-Yates) para que los obligatorios no queden siempre al principio
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

formPass.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const n = parseInt(longitud.value, 10);
  if (longitud.value === '' || Number.isNaN(n) || n < 4) {
    password.textContent = '';
    errorPass.textContent = 'La longitud debe ser mayor o igual a 4.';
    return;
  }
  errorPass.textContent = '';
  password.textContent = generar(n);
});
