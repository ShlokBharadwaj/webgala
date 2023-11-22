'use client';

import React, { useRef, useState } from 'react';
import styles from './DrinkWater.module.css';

const DrinkWater = () => {

  const remainedRef = useRef(null);
  const litersRef = useRef(null);
  const percentageRef = useRef(null);
  const totalCups = 8;
  const [cups, setCups] = useState(Array(totalCups).fill(false));

  const highlightCups = (idx) => {
    const newCups = cups.map((cup, cupIndex) => cupIndex <= idx);
    setCups(newCups);
    updateBigCups();
  };

  const updateBigCups = () => {
    const fullCups = cups.filter((cup) => cup).length;
    const percentageHeight = (fullCups / totalCups) * 330;
    const litersText = `${2 - (250 * fullCups) / 1000}L`;

    percentageRef.current.style.height = `${percentageHeight}px`;
    percentageRef.current.innerText = `${(fullCups / totalCups) * 100}%`

    if (fullCups === 0) {
      percentageRef.current.style.visibility = 'hidden';
    } else {
      percentageRef.current.style.visibility = 'visible';
    }

    if (fullCups === totalCups) {
      remainedRef.current.style.visibility = 'hidden';
    } else {
      remainedRef.current.style.visibility = 'visible';
      litersRef.current.innerText = litersText;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Drink Water</h1>
      <h3 className={styles.h3}>Goal: 2 Liters</h3>
      <div className={`${styles.cup}`}>
        <div className={styles.remained} ref={remainedRef}>
          <span ref={litersRef}>{`2L Remains`}</span>
          {/* <small>Remained</small> */}
        </div>
        <div className={styles.percentage} ref={percentageRef}></div>
      </div>

      <p className={styles.text}>Select how many glassed you have drank:</p>

      <div className={styles.cups}>
        {
          cups.map((cup, index) => (
            <div
              key={index}
              className={`${styles.cup} ${styles.cupSmall} ${cup ? styles.full : ''}`}
              onClick={() => highlightCups(index)}
            >
              250ml
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DrinkWater;