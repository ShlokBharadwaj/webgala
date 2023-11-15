'use client';

import React, { useState } from 'react';
import styles from './CustomRangeGenerator.module.css';

const CustomRangeGenerator = () => {

    const [rangeValue, setRangeValue] = useState(50);

    const handleRangeChange = (e) => {
        setRangeValue(+e.target.value);
    };

    return (
        <div className={`${styles.main}`}>
            <h2 className={`${styles.h2}`}>Slide for Custom Range:</h2>
            <div className={`${styles.rangeContainer}`}>
                <input type="range" min={0} max={100} value={rangeValue} onChange={handleRangeChange} />
            </div>
        </div>
    )
}

export default CustomRangeGenerator;