import React, { useState, useEffect } from 'react';
import styles from './Pokedex.module.css';

const Pokedex = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const totalPokemonCount = 1025;

    return (
        <div className={styles.container}>
            <h1>Pokedex</h1>
            <small>Have nostalgia with all 1025 pokemons</small>
            <div className={styles.pokeContainer} id="pokeContainer"></div>
        </div>
    )
}

export default Pokedex;