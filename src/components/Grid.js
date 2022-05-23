import React, { useEffect, useState } from 'react';
import './Grid.css'
import PokeCard from '../components/PokeCard'
import Loader from './layout/Loader';
import { getPokemonList } from '../api/pokemonApi';

const Grid = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);
    const [pokemonNameSearch, setPokemonNameSearch] = useState('');
    
    useEffect(() => {
        getPokemonList(props.limit, props.offset).then((pokemons) => {
            setPokemonList(pokemons.results);
            setPokemonFilteredList(pokemons.results);
            setIsLoading(false);
        }
        ).catch(err => {
            console.log('Error getting data: ' + err);
        });
    }, [props.limit, props.offset]);

    const pokemonCards = pokemonFilteredList.map((pokemon, index) =><PokeCard key={index} pokemon={pokemon}></PokeCard>);

    const pokemonSearchChange = (e) => {
        const searchValue = e.target.value;
        setPokemonNameSearch(searchValue);
        setPokemonFilteredList(pokemonList.filter(pokemon => pokemon.name.includes(searchValue)));
    }


    if (isLoading) {
        return (
            <>
                <Loader></Loader>
            </>
        )
    } else {
        return (
            <div className='container'>
                <div className='search-container'>
                    <input aria-label='Search a pokemon' placeholder='Search a pokemon' type="text" className='search-box' value={pokemonNameSearch} onChange={pokemonSearchChange} />
                </div>
                <div className='grid-container'>
                    {pokemonCards}
                </div>
            </div>
        )
    }
}
export default Grid;
