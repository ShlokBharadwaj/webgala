'use client';

import React from 'react';
import styles from './AnimatedNavigation.module.css'

const AnimatedNavigation = () => {
    return (
        <div className={styles.main}>
            <nav className={styles.active} id='nav'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className={styles.icon} id="toggle">
                    <div className={`${styles.line} ${styles.line1}`}></div>
                    <div className={`${styles.line} ${styles.line2}`}></div>
                </button>
            </nav>
        </div>
    )
}

export default AnimatedNavigation;