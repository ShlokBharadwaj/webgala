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
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`${styles.nav} ${styles.navBlack} ${isNavVisible ? styles.visible : ''}`}>
                <div className={`${styles.nav} ${styles.navRed}`}>
                    <div className={`${styles.nav} ${styles.navWhite}`}>
                        <button className={`${styles.navBtn} ${styles.closeBtn}`} onClick={handleCloseClick}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </button>
                        <img src="https://images.unsplash.com/photo-1637363990764-de84fd247b7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="netflix's logo" className={styles.logo} />

                        <ul className={styles.list}>
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                >
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetflixNavigation;