'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './AnimatedCountdowns.module.css';

const AnimatedCountdowns = () => {
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const numsRef = useRef([]);
    const counterRef = useRef(null);
    const finalMessageRef = useRef(null);

    const resetDOM = () => {
        const counter = counterRef.current;
        const finalMessage = finalMessageRef.current;

        counter.classList.remove(styles.hide);
        finalMessage.classList.remove(styles.show);

        numsRef.current.forEach((num) => {
            num.classList.value = '';
        });

        numsRef.current[0].classList.add(styles.in);
    };

    const runAnimation = () => {
        numsRef.current.forEach((num, idx) => {
            const nextToLast = numsRef.current.length - 1;

            num.addEventListener('animationend', (e) => {
                if (e.animationName === styles.goIn && idx !== nextToLast) {
                    num.classList.remove(styles.in);
                    num.classList.add(styles.out);
                } else if (e.animationName === styles.goOut && num.nextElementSibling) {
                    num.nextElementSibling.classList.add(styles.in);
                } else {
                    setAnimationCompleted(true);
                    counterRef.current.classList.add(styles.hide);
                    finalMessageRef.current.classList.add(styles.show);
                }
            });
        });
    };

    useEffect(() => {
        if (!animationCompleted) {
            runAnimation();
        }

        return () => {
            numsRef.current.forEach((num) => {
                num.removeEventListener('animationend', null);
            });
        };
    }, [animationCompleted]);

    const handleReplay = () => {
        setAnimationCompleted(false);
        resetDOM();
        runAnimation();
    };

    return (
        <div className={styles.main}>
            <div className={`${styles.counter}`} ref={counterRef}>
                <div className={styles.nums} ref={(el) => el && (numsRef.current = [...el.children])}>
                    <span className={styles.in}>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                </div>
                <h4 className={styles.h4}>Get Ready!</h4>
            </div>

            <div className={`${styles.final}`} ref={finalMessageRef}>
                <h1 className={styles.h1}>GO</h1>
                <button id={styles.replay} onClick={handleReplay}>
                    <span>Replay</span>
                </button>
            </div>
        </div>
    );
};

export default AnimatedCountdowns;
