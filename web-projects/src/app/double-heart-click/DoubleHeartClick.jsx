'use client';

import React, { useState, useRef } from 'react';
import styles from './DoubleHeartClick.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const DoubleHeartClick = () => {

    const timesRef = useRef(0);

    return (
        <div className={styles.main}>
            <h3 className={styles.h3}>Double click on the Image to
                <FontAwesomeIcon icon={faHeart} className={styles.faHeart} />
                it!
            </h3>
            <small className={styles.small}>You liked it <span ref={timesRef}>0</span> times</small>
            <div className={styles.loveMe}></div>
        </div>
    )
}

export default DoubleHeartClick;