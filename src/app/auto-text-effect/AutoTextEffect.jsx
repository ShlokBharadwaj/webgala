'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './AutoTextEffect.module.css';

const AutoTextEffect = () => {
    const textRef = useRef(null);
    const speedInputRef = useRef(null);

    const [text, setText] = useState("Shlok Bharadwaj");
    const [idx, setIdx] = useState(1);
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        const writeText = () => {
            textRef.current.innerText = text.slice(0, idx);
            setIdx((prevIdx) => (prevIdx % text.length) + 1);
        };

        const interval = setInterval(writeText, 300 / speed);

        return () => clearInterval(interval);
    }, [idx, speed, text]);

    const handleSpeedChange = (e) => {
        const newSpeed = parseInt(e.target.value, 10);
        if (isNaN(newSpeed) || newSpeed < 1 || newSpeed > 5) {
            return;
        }
        const clampedSpeed = Math.min(Math.max(newSpeed, 1), 5);
        setSpeed(clampedSpeed);
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.h1} ref={textRef}></h1>
            <div className={styles.speedCont}>
                <label htmlFor='speed'>Speed:</label>
                <input
                    className={styles.inputCont}
                    type='number'
                    name='speed'
                    id='speed'
                    value={speed}
                    min={1}
                    max={5}
                    step={1}
                    onChange={handleSpeedChange}
                    ref={speedInputRef}
                />
            </div>
        </div>
    );
};

export default AutoTextEffect;
