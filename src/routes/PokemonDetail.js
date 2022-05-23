import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getPokemonInfo } from '../api/pokemonApi';
import TypeChip from '../components/TypeChip';
import './PokemonDetail.css';


const PokemonDetail = () => {
    let params = useParams()
    let pokemonName = params.name;
    const [pokemon, setPokemon] = useState({});
    const [showShiny, setShowShiny] = useState(false);

    useEffect(() => {
        getPokemonInfo(pokemonName).then((pokemon) => { setPokemon(pokemon); }).catch(err => {
            console.log('Error getting pokemon data: ' + err);
        });;
    }, [pokemonName]);

    const changeImage = () => {
        setShowShiny(!showShiny);
    }
    // x Height are in decimeters
    // x Weight are in hectograms
    // STATS 
    // types
    // abilities

    return (
        <main className='main-container'>
            <div className='detail-grid'>
                <h1 className='poke-name'>{pokemon.name}</h1>
                {pokemon.sprites && pokemon.sprites.front_default ?
                    <div onClick={changeImage}>
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className={showShiny ? 'inactive' : 'active'}></img>
                        <img src={pokemon.sprites.front_shiny} alt={`${pokemon.name} shiny`} className={showShiny ? 'active' : 'inactive'}></img>
                    </div>
                    : null}
                <div className='poke-info'>
                    <p>
                        {`Height: ${pokemon.height / 10} m`}
                    </p>
                    <p>
                        {`Weight: ${pokemon.weight / 10} kg`}
                    </p>

                </div>
                <div className='poke-types'>
                    {pokemon.types && pokemon.types.length > 0 ? pokemon.types.map((type, index) => <TypeChip key={index} type={type.type.name}></TypeChip>) : null}
                </div>
            </div>
        </main>
    );
}

export default PokemonDetail