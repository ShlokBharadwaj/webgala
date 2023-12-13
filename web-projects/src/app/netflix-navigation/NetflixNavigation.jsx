import React, { useState } from 'react';
import styles from './NetflixNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';

const NetflixNavigation = () => {

    const [isNavVisible, setNavVisibility] = useState(false);

    const handleOpenClick = () => {
        setNavVisibility(true);
    }

    const handleCloseClick = () => {
        setNavVisibility(false);
    }

    const navItems = [
        { label: 'TV Shows', link: '#' },
        { label: 'Movies', link: '#' },
        { label: 'Recently Added', link: '#' },
        { label: 'My List', link: '#' },
        { label: 'Browse by language', link: '#' },
        { label: 'Around You', link: '#' },
        { label: 'Blogs', link: '#' },
    ];

    return (
        <div className={styles.container}>
            <button className={`${styles.navBtn} ${styles.openBtn}`} onClick={handleOpenClick}>
                <FontAwesomeIcon icon={faBars} className={styles.openIcon} />
            </button>

            <div className={`${styles.nav} ${isNavVisible ? styles.visible : ''}`}>
                <div className={`${styles.nav} ${styles.navWhite} ${isNavVisible ? styles.visible : ''}`}>
                    <button className={`${styles.navBtn} ${styles.closeBtn}`} onClick={handleCloseClick}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix's logo" className={styles.logo} />

                    <ul className={styles.list}>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className={styles.text}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NetflixNavigation;