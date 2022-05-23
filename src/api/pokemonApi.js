const baseApiUrl = 'https://pokeapi.co/api/v2/';

async function getPokemonList(limit, offset) {
    const url = baseApiUrl + `pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url, {
        cache: 'no-cache',
    });
    return response.json();
}

async function getPokemonInfo(name) {
    const response = await fetch(baseApiUrl + `pokemon/${name}`, {
        cache: 'no-cache',
    });
    return response.json();
}

export { getPokemonList, getPokemonInfo };

