// Ejercicio 5: calculadora con validación
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

const operaciones = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

function mostrar(texto, esError = false) {
  resultado.textContent = texto;
  resultado.classList.toggle('error', esError);
}

document.querySelectorAll('[data-op]').forEach((boton) => {
  boton.addEventListener('click', () => {
    if (num1.value === '' || num2.value === '') {
      mostrar('Rellena los dos números.', true);
      return;
    }
    const a = Number(num1.value);
    const b = Number(num2.value);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      mostrar('Introduce números válidos.', true);
      return;
    }
    const op = boton.dataset.op;
    if (op === 'dividir' && b === 0) {
      mostrar('No se puede dividir entre cero.', true);
      return;
    }
    const valor = operaciones[op](a, b);
    mostrar(`Resultado: ${Number.isInteger(valor) ? valor : valor.toFixed(4)}`);
  });
});
