'use client';

import React, { useRef } from 'react';
import styles from './DrinkWater.module.css';

const DrinkWater = () => {

  const remainedRef = useRef(null);
  const litersRef = useRef(null);
  const percentageRef = useRef(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Drink Water</h1>
      <h3 className={styles.h3}>Goal: 2 Liters</h3>
      <div className={styles.cup}>
        <div className={styles.remained} ref={remainedRef}>
          <span ref={litersRef}>1.5L</span>
          <small>Remained</small>
        </div>
        <div className={styles.percentage} ref={percentageRef}></div>
      </div>

      <p className={styles.text}>Select how many glassed you have drank:</p>

      <div className={styles.cups}>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
        <div className={`${styles.cup} ${styles.cupSmall}`}>250ml</div>
      </div>
    </div>
  )
}

export default DrinkWater;