import {obtenerListaPokemones} from "./pokemones.js"

export function manejarClickPrevio(offset) {
    if (offset !== 0) {
        offset = offset - 20;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    obtenerListaPokemones(url);
}

export function manejarClickSiguiente(offset) {
    offset = offset + 20;

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    obtenerListaPokemones(url);
}