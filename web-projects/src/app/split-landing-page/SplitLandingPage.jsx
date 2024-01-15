import React from 'react';
import styles from './SplitLandingPage.module.css';

const SplitLandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.childContainer}>
                <div className={`${styles.split} ${styles.left}`}>
                    <h1>X</h1>
                    <a href="https://x.com/" target="_blank" className={styles.btn}>Click here</a>
                </div>
                <div className={`${styles.split} ${styles.right}`}>
                    <h1>Instagram</h1>
                    <a href="https://instagram.com/" target="_blank" className={styles.btn}>Click here</a>
                </div>
            </div>
        </div>
    )
}

export default SplitLandingPage;