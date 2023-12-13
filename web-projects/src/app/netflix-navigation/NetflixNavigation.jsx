import React, { useState } from 'react';
import styles from './NetflixNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NetflixNavigation = () => {

    const [isNavVisible, setNavVisibility] = useState(false);

    const handleOpenClick = () => {
        setNavVisibility(true);
    }
    return (
        <div className={styles.container}>
            <button className={`${styles.navBtn} ${styles.openBtn}`} onClick={handleOpenClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}

export default NetflixNavigation;