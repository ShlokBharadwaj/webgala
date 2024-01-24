import React, { useEffect, useState } from 'react';
import styles from './ThemeClock.module.css';

const ThemeClock = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [timeData, setTimeData] = useState({
        month: '',
        day: '',
        date: '',
        hours: '',
        hoursForClock: '',
        minutes: '',
        seconds: '',
        ampm: '',
    });

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const scale = (num, inMin, inMax, outMin, outMax) => {
        return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    const setClock = () => {
        const time = new Date();
        const month = time.toLocaleString('default', { month: 'short' }).toUpperCase();
        const day = time.toLocaleString('default', { weekday: 'short' }).toUpperCase();
        const date = time.getDate();
        const hours = time.getHours();
        const hoursForClock = hours % 12 || 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        setTimeData({
            ...timeData,
            month,
            day,
            date,
            hours,
            hoursForClock,
            minutes,
            seconds,
            ampm,
        });
    };

    useEffect(() => {
        setClock();
        const intervalId = setInterval(setClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`${styles.container} ${isDarkMode ? styles.darkMode : ''}`}>
            <button className={`${styles.toggle} ${isDarkMode ? styles.dark : ''}`} onClick={handleToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className={styles.clockContainer}>
                <div className={styles.clock}>
                    <div className={`${styles.needle} ${styles.hour} ${isDarkMode ? styles.dark : ''}`}
                        style={{
                            transform: `translate(-50%, -100%) rotate(${scale(timeData.hoursForClock, 0, 12, 0, 360)}deg)`
                        }}
                    ></div>
                    <div className={`${styles.needle} ${styles.minute} ${isDarkMode ? styles.dark : ''}`}
                        style={{
                            transform: `translate(-50%, -100%) rotate(${scale(timeData.minutes, 0, 60, 0, 360)}deg)`
                        }}
                    ></div>
                    <div className={`${styles.needle} ${styles.second} ${isDarkMode ? styles.dark : ''}`}
                        style={{
                            transform: `translate(-50%, -100%) rotate(${scale(timeData.seconds, 0, 60, 0, 360)}deg)`
                        }}
                    ></div>
                    <div className={`${styles.needle} ${styles.point} ${isDarkMode ? styles.dark : ''}`}></div>
                </div>
                <div className={styles.time}>
                    {String(timeData.hoursForClock).padStart(2, '0')}:{String(timeData.minutes).padStart(2, '0')}:{String(timeData.seconds).padStart(2, '0')} {timeData.ampm}
                </div>
                <div className={styles.date}>
                    {timeData.month} <span className={styles.circle}>{timeData.date}</span>, {timeData.day}
                </div>
            </div>
        </div>
    )
}

export default ThemeClock