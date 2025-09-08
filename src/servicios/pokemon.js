/**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

import {
  cargarPokemon as cargarPokemonDeApi,
  cargarPokemones as cargarPokemonesDeApi,
} from '../api/pokemon.js';


import {
  cargarPokemon as cargarPokemonDeLocalStorage,
  cargarPokemones as cargarPokemonesDeLocalStorage,
  guardarPokemon,
  guardarPokemones,
} from '../storage/pokemon.js';

import { mapearListadoPokemones, mapearPokemon } from '../mapeador/pokemon.js';

/**
 * @param {String} id
 * @returns {Pokemon}
 */
export async function cargarPokemon(id) {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  let pokemon;

  try {
    pokemon = cargarPokemonDeLocalStorage(id);
  } catch (e) {
    console.warn("No se pudo cargar de localStorage:", e);
    const pokemonData = await cargarPokemonDeApi(id);
    pokemon = mapearPokemon(pokemonData);
    guardarPokemon(id, pokemon);
  }

  return pokemon;
}


/**
 * @param {String} offset
 * @return {ListadoPokemones}
 */
export async function cargarPokemones(offset = 0) {
  try {
    return cargarPokemonesDeLocalStorage(offset);
  } catch (e) {
    console.warn("No se pudo cargar de localStorage:", e);
    const pokemonesData = await cargarPokemonesDeApi(offset);
    const pokemones = mapearListadoPokemones(pokemonesData);
    guardarPokemones(offset, pokemones);
    return pokemones;
  }
}
