// Ejercicio 9: lista de tareas persistida en localStorage
const CLAVE = 'js-ejercicio9-tareas';
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');
const btnLimpiar = document.getElementById('btn-limpiar');

function cargar() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
  } catch {
    return [];
  }
}

let tareas = cargar();

function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(tareas));
}

function pintar() {
  listaTareas.innerHTML = '';
  tareas.forEach((tarea) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.gap = '.5rem';
    label.style.alignItems = 'center';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.style.width = 'auto';
    check.checked = tarea.completada;
    check.addEventListener('change', () => {
      tarea.completada = check.checked;
      guardar();
      pintar();
    });

    const span = document.createElement('span');
    span.textContent = tarea.texto;
    if (tarea.completada) span.classList.add('done');

    label.append(check, span);
    li.appendChild(label);
    listaTareas.appendChild(li);
  });
}

formTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const textoTarea = inputTarea.value.trim();
  if (!textoTarea) return;
  tareas.push({ id: Date.now(), texto: textoTarea, completada: false });
  guardar();
  pintar();
  inputTarea.value = '';
});

btnLimpiar.addEventListener('click', () => {
  tareas = tareas.filter((tarea) => !tarea.completada);
  guardar();
  pintar();
});

pintar();
