import React, { useState } from 'react';
import styles from './ProgressSteps.module.css';

const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const handleNextClick = () => {
    setCurrentActive((prevActive) => Math.min(prevActive + 1, 4));
  };

  const handlePrevClick = () => {
    setCurrentActive((prevActive) => Math.max(prevActive - 1, 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <div className={styles.progressContainer}>
          <div className={styles.progress}>
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={index}
                className={`${styles.circle} ${index < currentActive ? styles.active : ''
                  }`}
              >
                {step}
              </div>
            ))}
          </div>

          <button
            className={styles.btn}
            disabled={currentActive === 1}
            onClick={handlePrevClick}
          >
            Previous
          </button>
          <button
            className={styles.btn}
            disabled={currentActive === 4}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
