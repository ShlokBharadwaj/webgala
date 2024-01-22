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

    const navLinks = [
        { id: 1, text: 'Home', url: '#' },
        { id: 2, text: 'About', url: '#' },
        { id: 3, text: 'Services', url: '#' },
        { id: 4, text: 'Contact', url: '#' },
    ];

    return (
        <div className={`${styles.container} ${isActive ? styles.active : ''}`} >
            <nav className={styles.nav} ref={navRef}>
                <div className={styles.childContainer}>
                    <h1 className={styles.logo}><a href="#">Sticky Navbar</a></h1>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default StickyNavbar;