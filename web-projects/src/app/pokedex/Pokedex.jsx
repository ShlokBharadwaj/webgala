import React, { useState, useEffect } from 'react';
import styles from './Pokedex.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Pokedex = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const totalPokemonCount = 10; //TODO: Count to 1025 after debugging.

    const colors = {
        normal: '#A8A878',
        fighting: '#C03028',
        flyting: '#A890F0',
        posion: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        unknown: '#CCCCCC',
        shadow: '#333333',
    };

    const fetchAllPokemons = async () => {
        const data = [];
        for (let i = 1; i <= totalPokemonCount; i++) {
            const pokemon = await fetchPokemon(i);
            data.push(pokemon);
        }
        setPokemonData(data);
        setLoading(false);
    };

    const fetchPokemon = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        return res.json();
    };

    useEffect(() => {
    fetchAllPokemons();
}, []);


    return (
        <div className={styles.container}>
            <h1>Pokedex</h1>
            <small>Have nostalgia with all 1025 pokemons</small>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <FontAwesomeIcon icon={faSpinner} spin size="3x"></FontAwesomeIcon>
                </div>
            ) : (
                <div className={styles.pokeContainer} id="pokeContainer"></div>
            )}
        </div>
    )
}

export default Pokedex;