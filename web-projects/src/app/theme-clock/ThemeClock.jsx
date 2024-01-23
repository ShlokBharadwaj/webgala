import React, { useState } from 'react';
import styles from './ThemeClock.module.css';

const ThemeClock = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const scale = (num, inMin, inMax, outMin, outMax) => {
        return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    const setClock = () => {
        const time = new Date();
        const month = time.getMonth();
        const day = time.getDay();
        const date = time.getDate();
        const hours = time.getHours();
        const hoursForClock = hours % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    };

    setClock();

    setInterval(setClock, 1000);

    return (
        <div className={`${styles.container} ${isDarkMode ? styles.darkMode : ''}`}>
            <button className={styles.toggle} onClick={handleToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
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

export default ThemeClock