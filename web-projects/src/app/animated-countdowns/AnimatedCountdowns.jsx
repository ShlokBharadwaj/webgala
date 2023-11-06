'use client';

import React, { useEffect } from 'react';
import styles from './AnimatedCountdowns.module.css';

const AnimatedCountdowns = () => {
    return (
        <div className={styles.main}>
            <div className={styles.counter}>
                <div className={styles.nums}>
                    <span className={styles.in}>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                </div>
                <h4 className={styles.h4}>Get Ready!</h4>
            </div>

            <div className={styles.final}>
                <h1>GO</h1>
                <button id={styles.replay}>
                    <span>Replay</span>
                </button>
            </div>
        </div>
    )
}

export default AnimatedCountdowns