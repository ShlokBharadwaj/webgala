'use client';

import React, { useEffect, useState } from 'react';
import styles from './ThreeDBackgroundBoxes.module.css';

const ThreeDBackgroundBoxes = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const createBoxes = () => {
      const boxesCont = document.getElementById('boxes');
      if (boxesCont) {
        boxesCont.innerHTML = '';
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add(styles.box);
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesCont.appendChild(box);
          }
        }
      }
    };

    const handleButtonClick = () => {
      setIsActive((prev) => !prev);
    };

    const boxesCont = document.getElementById('boxes');
    if (boxesCont) {
      boxesCont.addEventListener('transitionend', () => {
        setIsActive(false);
      });
    }

    createBoxes();

    return () => {
      const btn = document.getElementById('btn');
      if (btn) {
        btn.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  useEffect(() => {
    const boxesCont = document.getElementById('boxes');
    if (boxesCont) {
      const rotation = isActive ? '360deg' : '0';
      boxesCont.style.transition = 'transform 2s';
      boxesCont.style.transform = `rotateZ(${rotation})`;
    }
  }, [isActive]);

  return (
    <div className={styles.main}>
      <button id="btn" className={styles.magic} onClick={() => setIsActive((prev) => !prev)}>
        🎇Magic🎆
      </button>
      <div className={`${styles.boxes}`} id="boxes"></div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;

