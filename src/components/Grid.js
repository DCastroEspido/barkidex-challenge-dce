import React, {useEffect, useState} from 'react';
import './Grid.css'
import PokeCard from '../components/PokeCard'
import Loader from './layout/Loader';
import { getPokemonList } from '../api/pokemonApi';

const Grid = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);


    useEffect(() => {
        getPokemonList(props.limit, props.offset).then((pokemons) => { setPokemonList(pokemons.results); setIsLoading(false) }).catch(err => {
           console.log(err);
        });
    }, [props.limit, props.offset]);
    const pokemonCards = pokemonList.map((pokemon, index) => <PokeCard key={index} pokemon={pokemon}></PokeCard>)
    if(isLoading){
        return (
            <>
                <Loader></Loader>
            </>
        )
    }else{
    return (
        <>
            <div className='container'>
                {pokemonCards}
            </div>
        </>
    )
}
}
export default Grid;
