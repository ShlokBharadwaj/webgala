import React, { useState, useEffect } from 'react';
import styles from './MovieApp.module.css';
import Image from "next/image";

const MovieApp = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8f6a0fca12c89f86f46fe4da733ada3e&page=1';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8f6a0fca12c89f86f46fe4da733ada3e&query=';

    useEffect(() => {
        getMovies(API_URL);
    }, []);

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm && searchTerm !== '') {
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm('');
        } else {
            window.location.reload();
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.container}>
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles.search} placeholder='Search...' value={searchTerm} onChange={handleSearch} autoFocus />
                </form>
            </header>
            <main>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className={styles.movie}
                    >
                        <Image src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} className={styles.imgs} width={1000} height={50}/>
                        <div className={styles.movieInfo}>
                            <h3>{movie.title}</h3>
                            <span className={`${styles.voteAverage} ${movie.vote_average < 5
                                ? styles.voteLow
                                : movie.vote_average < 8
                                    ? styles.voteMedium
                                    : styles.voteHigh}`}>
                                {movie.vote_average}
                            </span>
                        </div>
                        <div className={styles.overview}>
                            <h3>Overview</h3>
                            {movie.overview}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default MovieApp;