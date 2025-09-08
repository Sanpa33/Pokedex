import { cargarPokemon, cargarPokemones } from "../servicios/pokemon.js";

/**
 * 
 * @param {Number} offset 
 */

export async function obtenerListaPokemones(offset) {

    const listaPokemones = await cargarPokemones(offset)

    console.log(listaPokemones.nombresPokemones)

    const ul = document.getElementById("pokemon-lista");
    ul.innerHTML = "";
    
    listaPokemones.nombresPokemones.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = pokemon;

        li.addEventListener('click', () => {
            mostrarDetallesPokemon(pokemon);
        });

        ul.appendChild(li);
    });    

    if(listaPokemones.nombresPokemones.length > 0){
        mostrarDetallesPokemon(listaPokemones.nombresPokemones[0]);
    }

}


/**
 * @param {String} nombre
 */

export async function mostrarDetallesPokemon(nombre) {

    const pokemon = await cargarPokemon(nombre)

    const $pokemonImagen = document.getElementById("pokemonImagen");
    const $pokemonDetailContainer = document.querySelector(".pokemon-contenedor-detalles h2");
    const $pokemonNumero = document.getElementById("pokemon-numero");
    const $pokemonTipo = document.getElementById("pokemon-tipo");


    $pokemonImagen.src = pokemon.foto
    $pokemonImagen.alt = pokemon.nombre; 
    $pokemonDetailContainer.textContent = `Detalles de ${pokemon.nombre}`; 
    $pokemonNumero.textContent = `Número de Pokédex: ${pokemon.id}`
    const tipos = pokemon.tipos.map(tipoInfo => tipoInfo).join(', ');
    $pokemonTipo.textContent = `Tipo: ${tipos}`;


}