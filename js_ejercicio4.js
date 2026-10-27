// Ejercicio 4: filtro de búsqueda en tiempo real
const animales = ['Perro', 'Gato', 'Pez', 'Caballo', 'Conejo', 'Tortuga', 'Loro', 'Hámster', 'Gallina', 'Delfín'];
const filtro = document.getElementById('filtro');
const listaAnimales = document.getElementById('lista-animales');
const sinResultados = document.getElementById('sin-resultados');

// Normaliza para que "hamster" encuentre "Hámster"
const normalizar = (texto) => texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function pintarLista(elementos) {
  listaAnimales.innerHTML = '';
  elementos.forEach((animal) => {
    const li = document.createElement('li');
    li.textContent = animal;
    listaAnimales.appendChild(li);
  });
  sinResultados.hidden = elementos.length > 0;
}

filtro.addEventListener('input', () => {
  const busqueda = normalizar(filtro.value.trim());
  pintarLista(animales.filter((animal) => normalizar(animal).includes(busqueda)));
});

pintarLista(animales);
