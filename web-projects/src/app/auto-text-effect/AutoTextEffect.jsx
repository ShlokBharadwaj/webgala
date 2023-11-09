'use client';

import React, { useState } from 'react';
import styles from './AutoTextEffect.module.css';

const AutoTextEffect = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1} id='text'></h1>
            <div className={styles.speedCont}>
                <label htmlFor='speed'>Speed:</label>
                <input type="number" name='speed' id='speed' value={1} min={1} max={5} step={1} />
            </div>
        </div>
    )
}

export default AutoTextEffect;