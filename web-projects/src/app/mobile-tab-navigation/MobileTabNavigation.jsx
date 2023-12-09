import React from 'react';
import styles from './MobileTabNavigtion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHouseChimney, faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';

const MobileTabNavigation = () => {

    const imgUrls = [
        {
            url: 'https://source.unsplash.com/random/?work', alt: 'Work'
        },
        {
            url: 'https://source.unsplash.com/random/?home', alt: 'Home'
        },
        {
            url: 'https://source.unsplash.com/random/?blog', alt: 'Blog'
        },
        {
            url: 'https://source.unsplash.com/random/?portrait', alt: 'Portrait'
        },
    ];

    const icons = [
        faBriefcase,
        faHouseChimney,
        faBlogger,
        faImagePortrait,
    ];

    const tabTitles = ['Work', 'Home', 'Blog', 'Portrait'];

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {
                    imgUrls.map((imgs, index) => (
                        <img
                            key={index}
                            src={imgs.url}
                            alt={imgs.alt}
                            className={`${styles.content} ${index === 0 ? 'show' : ''}`}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default MobileTabNavigation;