import React, { useState, useEffect } from 'react';
import styles from './MovieApp.module.css';

const MovieApp = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
    }

    const handleSearch = (e) => {
    }

    return (
        <div className={styles.container}>
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles.search} placeholder='Search...' value={searchTerm} onChange={handleSearch} />
                </form>
            </header>
            <main></main>
        </div>
    )
}

export default MovieApp;