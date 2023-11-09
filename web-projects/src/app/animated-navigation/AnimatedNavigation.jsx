'use client';

import React, { useState } from 'react';
import styles from './AnimatedNavigation.module.css';

const AnimatedNavigation = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className={styles.main}>
            <nav className={`${isActive ? styles.active : ''} ${styles.nav}`} id='nav'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className={styles.icon} id="toggle" onClick={handleToggleClick}>
                    <div className={`${styles.line} ${styles.line1}`}></div>
                    <div className={`${styles.line} ${styles.line2}`}></div>
                </button>
            </nav>
        </div>
    );
};

export default AnimatedNavigation;
