let offset = 0;
import {obtenerListaPokemones} from "./pokemones.js";
import {manejarClickPrevio,manejarClickSiguiente} from "./ui.js";


const botonPrevio = document.getElementById('boton-previo');
const botonSiguiente = document.getElementById('boton-siguiente');


botonPrevio.addEventListener('click', (event) => manejarClickPrevio(event, offset));

botonSiguiente.addEventListener('click', (event) => manejarClickSiguiente(event, offset));

// Carga la lista inicial de Pokémon al iniciar la página
obtenerListaPokemones(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
