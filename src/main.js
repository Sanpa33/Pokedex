let offset = 0;

import { obtenerListaPokemones } from "./ui/interfaz.js";
import { manejarClickPrevio, manejarClickSiguiente } from "./ui.js";

const botonPrevio = document.getElementById('boton-previo');
const botonSiguiente = document.getElementById('boton-siguiente');


function actualizarListaPokemones(cambio){
    offset = Math.max(0, offset + cambio); 
    obtenerListaPokemones(offset)
}


botonPrevio.addEventListener('click', () => manejarClickPrevio(actualizarListaPokemones));
botonSiguiente.addEventListener('click', () => manejarClickSiguiente(actualizarListaPokemones));

// Inicial
actualizarListaPokemones(0);