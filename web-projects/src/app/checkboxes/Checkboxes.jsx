import React, { useState } from 'react';
import styles from './Checkboxes.module.css';

const Checkboxes = () => {
    const [checkedOptions, setCheckedOptions] = useState({
        good: false,
        cheap: false,
        fast: false,
    });

    const handleToggleChange = (option) => {
        setCheckedOptions((prevOptions) => {
            let updatedOptions = { ...prevOptions, [option]: !prevOptions[option] };
            console.log(prevOptions);

            if (updatedOptions.good && updatedOptions.cheap && updatedOptions.fast) {
                if (option === 'good') updatedOptions.fast = false;
                if (option === 'cheap') updatedOptions.good = false;
                if (option === 'fast') updatedOptions.cheap = false;
            }

            return updatedOptions;
        });
    };

    return (
        <div>
            <h2>How do you want your project to be?</h2>

            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    id="good"
                    className={styles.toggle}
                    checked={checkedOptions.good}
                    onChange={() => handleToggleChange('good')}
                />
                <label htmlFor="good" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Good</span>
            </div>

            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    id="cheap"
                    className={styles.toggle}
                    checked={checkedOptions.cheap}
                    onChange={() => handleToggleChange('cheap')}
                />
                <label htmlFor="cheap" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Cheap</span>
            </div>

            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    id="fast"
                    className={styles.toggle}
                    checked={checkedOptions.fast}
                    onChange={() => handleToggleChange('fast')}
                />
                <label htmlFor="fast" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Fast</span>
            </div>
        </div>
    );
};

export default Checkboxes;
