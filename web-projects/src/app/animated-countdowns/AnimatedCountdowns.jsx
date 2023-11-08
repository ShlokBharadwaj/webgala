'use client';

import React, { useEffect, useState } from 'react';
import styles from './AnimatedCountdowns.module.css';

const AnimatedCountdowns = () => {

    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const nums = document.querySelectorAll(`.${styles.nums} span`);
        const counter = document.querySelector(`.${styles.counter}`);
        const finalMessage = document.querySelector(`.${styles.final}`);
        const replay = document.querySelector(`#${styles.replay}`);

        if (!animationCompleted) {
            runAnimation();
        }

        function resetDOM() {
            counter.classList.remove(styles.hide);
            finalMessage.classList.remove(styles.show);

            nums.forEach((num) => {
                num.classList.value = '';
            });

            nums[0].classList.add(styles.in);
        }

        function runAnimation() {
            nums.forEach((num, idx) => {
                const nextToLast = nums.length - 1;

                num.addEventListener('animationend', (e) => {
                    if (e.animationName === styles.goIn && idx !== nextToLast) {
                        num.classList.remove(styles.in);
                        num.classList.add(styles.out);
                    } else if (e.animationName === styles.goOut && num.nextElementSibling) {
                        num.nextElementSibling.classList.add(styles.in);
                    } else {
                        setAnimationCompleted(true);
                        counter.classList.add(styles.hide);
                        finalMessage.classList.add(styles.show);
                    }
                });
            });
        }

        replay.addEventListener('click', () => {
            setAnimationCompleted(false);
            resetDOM();
            runAnimation();
        });
    }, [animationCompleted]);

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
                <h1 className={styles.h1}>GO</h1>
                <button id={styles.replay}>
                    <span>Replay</span>
                </button>
            </div>
        </div>
    )
}

export default AnimatedCountdowns;