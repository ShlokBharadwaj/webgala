import React from 'react';
import styles from './RandomChoicePicker.module.css';

const RandomChoicePicker = () => {
    return (
        <div className={styles.container}>
            <div className={styles.choiceContainer}>
                <h3>Enter all of the choices divided by space(' ').
                    <br />Press Enter when you're done.
                </h3>
                <textarea placeholder="Enter your choices here..." id="textarea"></textarea>
                <div id="tags"></div>
            </div>
        </div>
    )
}

export default RandomChoicePicker;