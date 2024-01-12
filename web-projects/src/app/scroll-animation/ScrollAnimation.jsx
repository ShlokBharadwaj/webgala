import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollAnimation.module.css';

const ScrollAnimation = () => {
  const boxesRef = useRef(null);
  const [boxes, setBoxes] = useState([]);

  const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add(styles.show);
      } else {
        box.classList.remove(styles.show);
      }
    });
  };

  useEffect(() => {
    setBoxes(boxesRef.current.querySelectorAll(`.${styles.box}`));

    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <div ref={boxesRef} className={styles.container}>
      <h1>Scroll to see the Animation.</h1>
      {[...Array(20)].map((_, index) => (
        <div key={index} className={styles.box}>
          <h1>Some content</h1>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
