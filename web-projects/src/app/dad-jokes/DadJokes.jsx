'use client';

import React, { useRef } from 'react';
import styles from './DadJokes.module.css';

const DadJokes = () => {

  const jokeRef = useRef(null);
  const jokesBtnRef = useRef(null);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3 className={styles.h3}>Don't Laugh Challenege</h3>
        <div className={styles.joke} ref={jokeRef}>
          // Here lies jokes...
        </div>
        <button className={styles.button} ref={jokesBtnRef}>Get another Joke</button>
      </div>
    </div>
  )
}

export default DadJokes;