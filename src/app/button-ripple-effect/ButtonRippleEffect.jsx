'use client';

import React, { useState } from 'react';
import styles from './ButtonRippleEffect.module.css';

const ButtonRippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.currentTarget.offsetTop;
    const buttonLeft = e.currentTarget.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    setRipples((prevRipples) => [
      ...prevRipples,
      { x: xInside, y: yInside, id: Date.now() },
    ]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 500);
  };

  return (
    <div className={styles.main}>
      <button
        className={`${styles.ripple} ${styles.button}`}
        onClick={handleClick}
      >
        Click Me
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={styles.circle}
            style={{ top: ripple.y, left: ripple.x }}
          ></span>
        ))}
      </button>
    </div>
  );
};

export default ButtonRippleEffect;