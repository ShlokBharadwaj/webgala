import React, { useState } from 'react';
import styles from './MobileTabNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faHouseChimney, faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const MobileTabNavigation = () => {

    const [activeIndex, setActiveIndex] = useState(0);

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
        faBlog,
        faImagePortrait,
    ];

    const tabTitles = ['Work', 'Home', 'Blog', 'Portrait'];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mobileContainer}>
                {
                    imgUrls.map((imgs, index) => (
                        <Image
                            key={index}
                            src={imgs.url}
                            alt={imgs.alt}
                            className={`${styles.content} ${index === activeIndex ? styles.show : ''}`}
                            height={500}
                            width={500}
                        />
                    ))
                }
                <div className={styles.nav}>
                    <ul>
                        {icons.map((icon, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(index)}
                                className={`${index === activeIndex ? styles.active : ''}`}
                            >
                                <FontAwesomeIcon icon={icon} />
                                <p>{tabTitles[index]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileTabNavigation;