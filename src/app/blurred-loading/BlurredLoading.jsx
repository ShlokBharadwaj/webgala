'use client'

import React, { useEffect, useState, useRef } from 'react';
import styles from './BlurredLoading.module.css';

const BlurredLoading = () => {
  const [load, setLoad] = useState(0);
  const loadTextRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoad((prevLoad) => {
        const newLoad = prevLoad + 1;
        if (newLoad > 99) {
          clearInterval(intervalId);
        }
        loadTextRef.current.innerText = `${newLoad}%`;
        loadTextRef.current.style.opacity = scale(newLoad, 0, 100, 1, 0);
        bgRef.current.style.filter = `blur(${scale(newLoad, 0, 100, 100, 0)}px)`;
        return newLoad;
      });
    }, 25);

    return () => clearInterval(intervalId);
  }, []);

  const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  };

  return (
    <div className={styles.main}>
      <section className={styles.bg} ref={bgRef}></section>
      <div className={styles.loadingText} ref={loadTextRef}>0%</div>
    </div>
  );
};

export default BlurredLoading;
