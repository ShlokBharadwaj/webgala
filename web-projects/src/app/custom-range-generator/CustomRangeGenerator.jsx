'use client';

import React, { useState, useRef } from 'react';
import styles from './CustomRangeGenerator.module.css';

const CustomRangeGenerator = () => {

    const [rangeValue, setRangeValue] = useState(50);
    const [labelPosition, setLabelPosition] = useState(0);
    const labelRef = useRef(null);

    const handleRangeChange = (e) => {
        setRangeValue(+e.target.value);
        updateLabelPosition(e);
    };

    const updateLabelPosition = (e) => {
        const max = +e.target.max;
        const min = +e.target.min;

        const num_width = e.target.offsetWidth;
        const num_label_width = labelRef.current.offsetWidth;

        const left =
            (rangeValue * (num_width / max) - num_label_width / 2 + scale(rangeValue, min, max, 10, -10));

        setLabelPosition(left);
    };

    const scale = (number, inMin, inMax, outMin, outMax) => {
        return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    return (
        <div className={`${styles.main}`}>
            <h2 className={`${styles.h2}`}>Slide for Custom Range:</h2>
            <div className={`${styles.rangeContainer}`}>
                <input type="range" min={0} max={100} value={rangeValue} onChange={handleRangeChange} />
                <label htmlFor="range" style={{ left: `${labelPosition}px` }} ref={labelRef}>
                    {rangeValue}
                </label>
            </div>
        </div>
    )
}

export default CustomRangeGenerator;