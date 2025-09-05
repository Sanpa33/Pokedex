export function obtenerListaPokemones(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const ul = document.getElementById("pokemon-lista");
            ul.innerHTML = ""; // Limpiamos la lista anterior

            data.results.forEach(pokemon => {
                const li = document.createElement('li');
                li.textContent = pokemon.name;

                li.addEventListener('click', () => {
                    mostrarDetallesPokemon(pokemon.url);
                });

                ul.appendChild(li);
            });

            // Mostramos los detalles del primer pokémon de la lista nueva
            if (data.results.length > 0) {
                mostrarDetallesPokemon(data.results[0].url);
            }

        })
        .catch(error => console.error('Error:', error));
}


export function mostrarDetallesPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pokemonImagen = document.getElementById("pokemonImagen");
            const pokemonDetailContainer = document.querySelector(".pokemon-contenedor-detalles h2");
            const pokemonNumero = document.getElementById("pokemon-numero");
            const pokemonTipo = document.getElementById("pokemon-tipo");

            
            pokemonImagen.src = data.sprites.other['official-artwork'].front_default;
            pokemonImagen.alt = data.name; 
            pokemonDetailContainer.textContent = `Detalles de ${data.name}`; 
            pokemonNumero.textContent = `Número de Pokédex: ${data.id}`
            const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            pokemonTipo.textContent = `Tipo: ${tipos}`;

            
        })
        .catch(error => console.error('Error:', error));
}
