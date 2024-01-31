import React, { useState, useEffect } from 'react';
import styles from './Pokedex.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Pokedex = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('id');
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
            if (i % 20 === 0) {
                setLoading(false);
                setPokemonData(data);
            }
        }
        setLoading(false);
        setPokemonData(data);
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
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt={`${pokemon.name}'s picture`} 
                        className={styles.pokeImg}
                        height={96}
                        width={96}
                        />
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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const filteredAndSortedPokemon = pokemonData
        .filter((pokemon) => pokemon.name.includes(searchTerm))
        .sort((a, b) => {
            if (sortBy === 'id') {
                return a.id - b.id;
            } else if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'type') {
                const typeA = a.types[0].type.name;
                const typeB = b.types[0].type.name;
                return typeA.localeCompare(typeB);
            }
            return 0;
        });

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * totalPokemonCount) + 1;
        const randomPokemon = await fetchPokemon(randomId);
        setPokemonData([randomPokemon]);
        setSearchTerm('');
    };

    return (
        <div className={styles.container}>
            <h1>Pokédex</h1>
            <small>Have nostalgia with all {totalPokemonCount} pokémons</small>
            {loading ? (
                <div className={styles.loadingContainer} aria-live="polite">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" className={styles.spinnerIcon}></FontAwesomeIcon>
                </div>
            ) : (
                <>
                    <div className={styles.controls}>
                        <input
                            type="text"
                            placeholder="Search Pokémon..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select value={sortBy} onChange={handleSortChange}>
                            <option value="id">Sort by ID</option>
                            <option value="name">Sort by Name</option>
                            <option value="type">Sort by Type</option>
                        </select>
                        <button className={styles.randomButton} onClick={fetchRandomPokemon}>
                            <FontAwesomeIcon icon={faRandom} className={styles.randomIcon} />
                            Random Pokémon
                        </button>
                    </div>
                    <div className={styles.pokeContainer}>
                        {filteredAndSortedPokemon.map(mapPokemonToElement)}
                    </div>
                </>

            )}
        </div>
    );
}

export default Pokedex;