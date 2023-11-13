'use client';

import React, { useRef } from 'react';
import styles from './ButtonRippleEffect.module.css';

const ButtonRippleEffect = () => {
    const buttonRef = useRef(null);

    return (
        <div className={styles.main}>
            <button className={`${styles.ripple} ${styles.button}`} ref={buttonRef}>
                Click Me
            </button>
        </div>
    );
};

export default ButtonRippleEffect;