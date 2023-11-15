'use client';

import React from 'react';
import styles from './CustomRangeGenerator.module.css';

const CustomRangeGenerator = () => {
    return (
        <div className={`${styles.main}`}>
            <h2 className={`${styles.h2}`}>Slide for Custom Range:</h2>
            <div className={`${rangeContainer}`}>

            </div>
        </div>
    )
}

export default CustomRangeGenerator;