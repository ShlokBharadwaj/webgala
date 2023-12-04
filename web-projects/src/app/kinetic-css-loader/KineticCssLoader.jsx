import React from 'react';
import styles from './KineticCssLoader.module.css';

const KineticCssLoader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default KineticCssLoader;