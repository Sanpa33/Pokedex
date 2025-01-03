let offset = 0;

fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
    .then(response => response.json())
    .then(data => {

        const ul = document.getElementById("pokemon-lista");

        data.results.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name;

            li.addEventListener('click', () => {
                mostrarDetallesPokemon(pokemon.url);
            });

            ul.appendChild(li);
        });

    })
    .catch(error => console.error('Error:', error));

function obtenerListaPokemones(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const ul = document.getElementById("pokemon-lista");
            ul.textContent = "";

            data.results.forEach(pokemon => {
                const li = document.createElement('li');
                li.textContent = pokemon.name;

                li.addEventListener('click', () => {
                    mostrarDetallesPokemon(pokemon.url);
                });

                ul.appendChild(li);
            });

        })
        .catch(error => console.error('Error:', error));
}

function mostrarDetallesPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pokemonImagen = document.getElementById("pokemonImagen");
            const pokemonDetailContainer = document.querySelector(".pokemon-contenedor-detalles h2");
            const pokemonNumero = document.getElementById("pokemon-numero");
            const pokemonTipo = document.getElementById("pokemon-tipo");

            
            pokemonImagen.src = data.sprites.front_default; 
            pokemonImagen.alt = data.name; 
            pokemonDetailContainer.textContent = `Detalles de ${data.name}`; 
            pokemonNumero.textContent = `Número de Pokédex: ${data.id}`
            const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            pokemonTipo.textContent = `Tipo: ${tipos}`;

            
        })
        .catch(error => console.error('Error:', error));
}

const botonPrevio = document.getElementById('boton-previo');
const botonSiguiente = document.getElementById('boton-siguiente');

function manejarClickPrevio() {
    const listaPokemon = document.getElementById("pokemon-lista");
    listaPokemon.textContent = "";

    if (offset !== 0) {
        offset = offset - 20;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    obtenerListaPokemones(url);
}

function manejarClickSiguiente() {
    const listaPokemon = document.getElementById("pokemon-lista");
    listaPokemon.textContent = "";

    offset = offset + 20;

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    obtenerListaPokemones(url);
}

botonPrevio.addEventListener('click', manejarClickPrevio);
botonSiguiente.addEventListener('click', manejarClickSiguiente);
