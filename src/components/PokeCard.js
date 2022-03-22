import { useEffect, useState } from 'react';
import './PokeCard.css'
import { getPokemonInfo } from '../api/pokemonApi';
import Loader from './layout/Loader';

const PokeCard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemonInfo(props.pokemon.url).then((pokemon) => { setPokemon(pokemon); setTimeout(() => { setIsLoading(false) }, 2000) }).catch(err => {
            console.log(err);
        });;
    }, [props.pokemon.url]);


    return (
        <>
            <figure className='poke-container'>
                {isLoading ?
                    <Loader></Loader>
                    : <div>
                        <img className='poke-icon' alt={`${pokemon.name} front`} src={pokemon.sprites.front_default}></img>
                        <dl className='poke-info'>
                            <dt className='poke-number'>#{pokemon.id}</dt>
                            <dd className='poke-info'>{pokemon.name}</dd>
                        </dl>
                    </div>}
            </figure>
        </>
    )
}
export default PokeCard;