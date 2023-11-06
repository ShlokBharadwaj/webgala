'use client';

import React, { useEffect } from 'react';
import styles from './ThreeDBackgroundBoxes.module.css';

const ThreeDBackgroundBoxes = () => {
  useEffect(() => {
    const boxesCont = document.getElementById('boxes');
    const btn = document.getElementById('btn');

    const createBoxes = () => {

      boxesCont.innerHTML = '';

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const box = document.createElement('div');
          box.classList.add(styles.box);
          box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
          boxesCont.appendChild(box);
        }
      }
    };

    const handleButtonClick = () => {
      boxesCont.classList.toggle(styles.activez);
      boxesCont.querySelectorAll(`.${styles.box}`).forEach((box) => {
        box.style.transform = boxesCont.classList.contains(styles.activez)
          ? 'rotateZ(360deg)'
          : 'rotateZ(0)';
      });
    };

    btn.addEventListener('click', handleButtonClick);

    createBoxes();

    return () => {
      btn.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <div className={styles.main}>
      <button id="btn" className={styles.magic}>
        🎇Magic🎆
      </button>
      <div className={`${styles.boxes}`} id="boxes"></div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;