let offset = 0

fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
    .then(response => response.json())
    .then(data => {

        const ul = document.getElementById("pokemon-lista")

        data.results.forEach(pokemon => {
        const li = document.createElement('li'); 
        li.textContent = pokemon.name;
        ul.appendChild(li);
        });

    })
    .catch(error => console.error('Error:', error));



function obtenerLista(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const ul = document.getElementById("pokemon-lista")

        data.results.forEach(pokemon => {
        const li = document.createElement('li'); 
        li.textContent = pokemon.name;  
        ul.appendChild(li);
        });
    
    })
    .catch(error => console.error('Error:', error));

    agregarEventosAClick();

}


const botonPrevio = document.getElementById('boton-previo');
const botonSiguiente = document.getElementById('boton-siguiente')

function manejarClickPrevio() {

    const listaPokemon = document.getElementById("pokemon-lista");
    listaPokemon.textContent = ""
    
    if (offset !== 0){
        offset = offset - 20
    }

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`; // Cambiar la URL según el estado
    obtenerLista(url);
}

function manejarClickSiguiente() {

    const listaPokemon = document.getElementById("pokemon-lista");
    listaPokemon.textContent = "";

    offset = offset + 20;

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`; // Cambiar la URL según el estado
    obtenerLista(url);
}

botonPrevio.addEventListener('click', manejarClickPrevio);
botonSiguiente.addEventListener('click', manejarClickSiguiente);


