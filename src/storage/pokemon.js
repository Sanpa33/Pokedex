/**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

function obtenerKeyPokemon(id){
    return `pokemon_${id}`;
}

function obtenerKeyPokemones(offset){
    return `pokemones_${offset}`;
}

/**
 * @param {String} id
 * @returns {Pokemon}
 */
export function cargarPokemon(id) {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)));
  if (pokemon === null) {
    throw new Error(`Pokemon con id ${id} no encontrado`);
  }

  return pokemon;
}

/**
 * @param {Number} offset
 * @return {ListadoPokemones}
 */
export function cargarPokemones(offset = 0) {
  const pokemones = JSON.parse(localStorage.getItem(obtenerKeyPokemones(offset)));
  if (pokemones === null) {
    throw new Error(`Listado de pokemones con offset ${offset} no encontrado`);
  }

  return pokemones;
}


/**
 * @param {String} id
 * @param {Pokemon} pokemon
 */
export function guardarPokemon(id, pokemon) {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
  }

  localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
}

/**
 * @param {Number} offset
 * @param {ListadoPokemones} pokemones
 */
export function guardarPokemones(offset, pokemones) {
  if (offset === undefined || typeof pokemones !== 'object') {
    throw new Error('Se necesita offset y pokemones');
  }

  localStorage.setItem(obtenerKeyPokemones(offset), JSON.stringify(pokemones));
}
