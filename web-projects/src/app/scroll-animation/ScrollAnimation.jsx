import React from 'react';
import styles from './ScrollAnimation.module.css';

const ScrollAnimation = () => {
    return (
        <div className={styles.container}>
            <h1>Scroll to see the Animation.</h1>
            {[...Array(20)].map((_, index) => (
                <div key={index} className={styles.box}>
                    <h1>Some content</h1>
                </div>
            ))}
        </div>
    )
}

export default ScrollAnimation;