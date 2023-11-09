'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './AutoTextEffect.module.css';

const AutoTextEffect = () => {

    const textRef = useRef(null);
    const speedInputRef = useRef(null);

    const [text, setText] = useState("Shlok Bharadwaj")
    const [idx, setIdx] = useState(1);
    const [speed, setSpeed] = useState(300);

    useEffect(() => {
        writeText();

        function writeText() {
            textRef.current.innerText = text.slice(0, idx);
            setIdx((prevIdx) => (prevIdx % text.length) + 1);
            setTimeout(writeText, speed);
        }

        const handleSpeedChange = (e) => setSpeed(300 / e.target.value);

        speedInputRef.current.addEventListener('input', handleSpeedChange);

        return () => {
            speedInputRef.current.removeEventListener('input', handleSpeedChange);
        };
    }, [idx, speed, text]);

    return (
        <div className={styles.main}>
            <h1 className={styles.h1} ref={textRef}></h1>
            <div className={styles.speedCont}>
                <label htmlFor='speed'>Speed:</label>
                <input
                    className={styles.inputCont}
                    type="number"
                    name='speed'
                    id='speed'
                    value={1}
                    min={1}
                    max={5}
                    step={1}
                    ref={speedInputRef} />
            </div>
        </div>
    )
}

export default AutoTextEffect;