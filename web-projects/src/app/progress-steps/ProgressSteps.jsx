import React from 'react';
import styles from './ProgressSteps.module.css';

const ProgressSteps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <div className={styles.progressContainer}>
          <div className={styles.progress} id="progress">
            <div className={`${styles.circle} ${styles.active}`}>1</div>
            <div className={`${styles.circle}`}>2</div>
            <div className={`${styles.circle}`}>3</div>
            <div className={`${styles.circle}`}>4</div>
          </div>

          <button className={styles.btn} id="prev" disabled>Previous</button>
          <button className={styles.btn} id="next">Next</button>
        </div>
      </div>
    </div>
  )
}

export default ProgressSteps;