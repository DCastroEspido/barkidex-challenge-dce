import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './PokeCard.css'
import { getPokemonInfo } from '../api/pokemonApi';
import Loader from './layout/Loader';

const PokeCard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemonInfo(props.pokemon.name).then((pokemon) => { setPokemon(pokemon); setIsLoading(false) }).catch(err => {
            console.log(err);
        });;
    }, [props.pokemon.name]);

    return (
        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
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
        </Link>
    )
}
export default PokeCard;