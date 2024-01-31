import React, { useEffect, useState } from 'react';
import styles from './FormWaveAnimation.module.css';

const FormWaveAnimation = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const initialLabels = ['Email', 'Password'];
    setLabels(
      initialLabels.map((text) => ({
        text,
        spans: Array.from(text).map((letter, subIdx) => (
          <span key={subIdx} style={{ transitionDelay: `${subIdx * 50}ms` }}>
            {letter}
          </span>
        )),
      }))
    );
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>Login Here</h1>
        <form>
          {labels.map((label, idx) => (
            <div key={idx} className={styles.formControl}>
              <input type={idx === 0 ? 'text' : 'password'} required />
              <label>
              <div className={styles.labelContainer}>{label.spans}</div>
              </label>
            </div>
          ))}
          <button className={styles.btn}>Login</button>
          <p className={styles.registerContainer}>
            Don&apos;t have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormWaveAnimation;
