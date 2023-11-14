'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './ContentPlaceholder.module.css';

const ContentPlaceholder = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const excerptRef = useRef(null);
    const profileImgRef = useRef(null);
    const nameRef = useRef(null);
    const dateRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const header = '<img src="https://source.unsplash.com/random" alt="www.unsplash.com" classname={`${styles.img}`}>';
            const title = 'Lorem ipsum dolor sit amet';
            const excerpt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
            const profileImg = '<img src="https://source.unsplash.com/random/250×250/?portrait" alt="www.unsplash.com" classname={`${styles.img}`}/>';
            const name = 'Jon Doe';
            const date = 'Dec 08, 2023';

            setDataLoaded(true);

            headerRef.current.innerHTML = header;
            titleRef.current.innerHTML = title;
            excerptRef.current.innerHTML = excerpt;
            profileImgRef.current.innerHTML = profileImg;
            nameRef.current.innerHTML = name;
            dateRef.current.innerHTML = date;
        };

        fetchData();
    }, []);

    return (
        <div className={styles.main}>
            <div className={`${styles.card} ${dataLoaded ? '' : styles.loading}`}>
                <div className={`${styles.cardHeader} ${styles.animatedBg}`} ref={headerRef}>&nbsp;</div>
                <div className={styles.cardContent}>
                    <h3 className={`${styles.cardTitle} ${styles.animatedBg} ${styles.animatedBgText}`} ref={titleRef}>&nbsp;</h3>
                    <p className={styles.cardExcerpt} ref={excerptRef}>
                        &nbsp;
                        <span className={`${styles.animatedBg} ${styles.animatedBgText}`}>&nbsp;</span>
                        <span className={`${styles.animatedBg} ${styles.animatedBgText}`}>&nbsp;</span>
                        <span className={`${styles.animatedBg} ${styles.animatedBgText}`}>&nbsp;</span>
                    </p>
                    <div className={styles.author}>
                        <div className={`${styles.profileImg} ${styles.animatedBg}`} ref={profileImgRef}>&nbsp;</div>
                        <div className={styles.authorInfo}>
                            <strong className={`${styles.animatedBg} ${styles.animatedBgText}`} ref={nameRef}>&nbsp;</strong>
                            <small className={`${styles.animatedBg} ${styles.animatedBgText}`} ref={dateRef}>&nbsp;</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentPlaceholder;
