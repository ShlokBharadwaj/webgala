import React, { useState } from 'react';
import styles from './HiddenSearchWidget.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HiddenSearchWidget = () => {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.search} ${isActive ? styles.active : ''}`}>
                <input type="text" className={styles.input} placeholder='Search...' />
                <button className={styles.btn} onClick={handleButtonClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default HiddenSearchWidget;