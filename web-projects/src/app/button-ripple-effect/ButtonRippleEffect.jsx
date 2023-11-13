'use client';

import React, { useRef } from 'react';
import styles from './ButtonRippleEffect.module.css';

const ButtonRippleEffect = () => {
    const buttonRef = useRef(null);

    const handleClick = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = buttonRef.current.offsetTop;
        const buttonLeft = buttonRef.current.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = `${yInside}px`;
        circle.style.left = `${xInside}px`;

        buttonRef.current.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    };

    return (
        <div className={styles.main}>
            <button className={`${styles.ripple} ${styles.button}`} ref={buttonRef} onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
};

export default ButtonRippleEffect;