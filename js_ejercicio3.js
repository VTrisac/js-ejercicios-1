// Ejercicio 3: lista dinámica con alta y baja de elementos
const formLista = document.getElementById('form-lista');
const inputItem = document.getElementById('input-item');
const lista = document.getElementById('lista');
const errorLista = document.getElementById('error-lista');

function crearElemento(texto) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = texto; // textContent evita inyectar HTML

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.className = 'danger';
  btnEliminar.addEventListener('click', () => li.remove());

  li.append(span, btnEliminar);
  return li;
}

formLista.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = inputItem.value.trim();
  if (!texto) {
    errorLista.textContent = 'Escribe algo antes de agregar.';
    return;
  }
  errorLista.textContent = '';
  lista.appendChild(crearElemento(texto));
  inputItem.value = '';
  inputItem.focus();
});
