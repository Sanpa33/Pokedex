export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function cargarPokemon(id) {
    if(id == undefined){
        throw new Error("Se necesita un identificador para cargar un pokemon");
    }

    return (await fetch(`${BASE_URL}${id}`)).json();
}


export async function cargarPokemones(offset = 0){
    return (await fetch(`${BASE_URL}?offset=${offset}&limit=20`)).json();
}