import React from 'react';
import styles from './ThemeClock.module.css';

const ThemeClock = () => {
    return (
        <div className={styles.container}>
            <button className={styles.toggle}>Dark Mode</button>
            <div className={styles.clockContainer}>
                <div className={styles.clock}>
                    <div className={`${styles.needle} ${styles.hour}`}></div>
                    <div className={`${styles.needle} ${styles.minute}`}></div>
                    <div className={`${styles.needle} ${styles.second}`}></div>
                    <div className={`${styles.needle} ${styles.point}`}></div>
                </div>
                <div className={styles.time}></div>
                <div className={styles.date}></div>
            </div>
        </div>
    )
}

export default ThemeClock;