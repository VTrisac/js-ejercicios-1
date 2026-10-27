// Ejercicio 6: temporizador con iniciar, pausar y reiniciar
const tiempo = document.getElementById('tiempo');
let segundos = 0;
let intervalo = null;

const dosDigitos = (n) => String(n).padStart(2, '0');

function pintar() {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;
  tiempo.textContent = `${dosDigitos(h)}:${dosDigitos(m)}:${dosDigitos(s)}`;
}

document.getElementById('btn-iniciar').addEventListener('click', () => {
  if (intervalo) return; // evita varios intervalos a la vez
  intervalo = setInterval(() => {
    segundos++;
    pintar();
  }, 1000);
});

document.getElementById('btn-pausar').addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
});

document.getElementById('btn-reiniciar').addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  pintar();
});
