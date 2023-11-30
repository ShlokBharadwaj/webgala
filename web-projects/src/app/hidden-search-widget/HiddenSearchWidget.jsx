import React from 'react';
import styles from './HiddenSearchWidget.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HiddenSearchWidget = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input type="text" className={styles.input} placeholder='Search...' />
                <FontAwesomeIcon icon={faSearch} className={styles.btn} />
            </div>
        </div>
    )
}

export default HiddenSearchWidget;