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

    return (
        <div className={`${styles.card} ${dataLoaded ? '' : styles.loading}`}>
        </div>
    );
};

export default ContentPlaceholder;
