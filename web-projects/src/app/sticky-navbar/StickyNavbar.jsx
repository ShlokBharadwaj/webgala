import React, { useState, useEffect, useRef } from 'react';
import styles from './StickyNavbar.module.css';

const StickyNavbar = () => {

    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > navRef.current.offsetHeight + 150) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`${styles.container} ${isActive ? styles.active : ''}`} >
            <nav className={styles.nav} ref={navRef}>
                <div className={styles.childContainer}>
                    <h1 className={styles.logo}><a href="#">Sticky Navbar</a></h1>
                    <ul>
                        <li><a href="#" className={styles.current}>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Connect</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default StickyNavbar;