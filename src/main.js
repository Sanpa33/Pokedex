let offset = 0;

import { obtenerListaPokemones } from "./pokemones.js";
import { manejarClickPrevio, manejarClickSiguiente } from "./ui.js";

const botonPrevio = document.getElementById('boton-previo');
const botonSiguiente = document.getElementById('boton-siguiente');

// función para actualizar offset y pedir pokemones
function actualizarListaPokemones(cambio) {
    offset = Math.max(0, offset + cambio); // nunca bajar de 0
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    obtenerListaPokemones(url);
}

botonPrevio.addEventListener('click', () => manejarClickPrevio(actualizarListaPokemones));
botonSiguiente.addEventListener('click', () => manejarClickSiguiente(actualizarListaPokemones));

// Inicial
actualizarListaPokemones(0);