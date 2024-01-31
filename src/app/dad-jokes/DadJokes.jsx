'use client';

import React, { useRef, useEffect } from 'react';
import styles from './DadJokes.module.css';

const DadJokes = () => {
  const jokeRef = useRef();
  const jokesBtnRef = useRef();

  const getJokes = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    console.log(data);
    jokeRef.current.innerHTML = data.joke;
  };

  useEffect(() => {
    getJokes();
    const jokesBtn = jokesBtnRef.current;

    if (jokesBtn) {
      jokesBtn.addEventListener('click', getJokes);
    }

    return () => {
      if (jokesBtn) {
        jokesBtn.removeEventListener('click', getJokes);
      }
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3 className={styles.h3}>Don&apos;t Laugh Challenge</h3>
        <div className={styles.joke} ref={jokeRef}>
          loading jokes...
        </div>
        <button className={styles.button} ref={jokesBtnRef}>
          Get another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
