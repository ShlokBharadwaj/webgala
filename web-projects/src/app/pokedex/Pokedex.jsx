import React, { useState, useEffect } from 'react';
import styles from './Pokedex.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Pokedex = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const totalPokemonCount = 1024;

    const colors = {
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
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
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch Pokemon');
            }
            return res.json();
        } catch (error) {
            console.error('Error fetching Pokemon: ', error);
        }
    };

    useEffect(() => {
        fetchAllPokemons();
    }, []);

    const mapPokemonToElement = (pokemon) => {
        const pokeType = pokemon.types.map((type) => type.type.name);
        const type = Object.keys(colors).find((key) => pokeType[0].includes(key));
        const color = colors[type];

        return (
            <div key={pokemon.id} className={styles.pokemon} style={{ backgroundColor: color }}>
                <div className={styles.imgContainer}>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt={`${pokemon.name}'s picture`} />
                </div>
                <div className={styles.pokeInfo}>
                    <span className={styles.pokeNum}>#{pokemon.id}</span>
                    <h3 className={styles.pokeName}>{capitalizeFirstLetter(pokemon.name)}</h3>
                    <small className={styles.pokeType}>
                        <span>Type: {capitalizeFirstLetter(type)}</span>
                    </small>
                </div>
            </div>
        );
    };

    const capitalizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className={styles.container}>
            <h1>Pokedex</h1>
            <small>Have nostalgia with all {totalPokemonCount} pokemons</small>
            {loading ? (
                <div className={styles.loadingContainer} aria-live="polite">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" className={styles.spinnerIcon}></FontAwesomeIcon>
                </div>
            ) : (
                <div className={styles.pokeContainer}>
                    {pokemonData.map(mapPokemonToElement)}
                </div>
            )}
        </div>
    )
}

export default Pokedex;