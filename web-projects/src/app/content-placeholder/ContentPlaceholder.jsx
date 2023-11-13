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

            const header = '<img src="https://source.unsplash.com/random" alt="www.unsplash.com">';
            const title = 'Lorem ipsum dolor sit amet';
            const excerpt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
            const profileImg = '<img src="https://source.unsplash.com/random/250×250/?portrait" alt="" />';
            const name = 'Derk Jaminson';
            const date = 'May 19, 2022';

            setDataLoaded(true);
        };

        fetchData();
    }, []);

    return (
        <div className={`${styles.card} ${dataLoaded ? '' : styles.loading}`}>
        </div>
    );
};

export default ContentPlaceholder;
