'use client';

import React, { useState, useRef } from 'react';
import styles from './DoubleHeartClick.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const DoubleHeartClick = () => {
    const [timesClicked, setTimesClicked] = useState(0);
    const loveMeRef = useRef();

    const createHeart = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const leftOffset = e.target.offsetLeft;
        const topOffset = e.target.offsetTop;

        const xInside = x - leftOffset;
        const yInside = y - topOffset;

        setTimesClicked((prevTimes) => prevTimes + 1);

        const heart = (
            <FontAwesomeIcon
                icon={faHeart}
                className={`${styles.faHeart} ${styles.heartAnimation}`}
                key={Date.now()}
                style={{ top: `${yInside}px`, left: `${xInside}px` }}
            />
        );

        loveMeRef.current.appendChild(heart);

        setTimeout(() => {
            loveMeRef.current.removeChild(heart);
        }, 1000);
    };

    return (
        <div className={styles.main}>
            <h3 className={styles.h3}>
                Double click on the Image to&nbsp;
                <FontAwesomeIcon icon={faHeart} className={styles.faHeart} />
                &nbsp;it!
            </h3>
            <small className={styles.small}>
                You liked it <span>{timesClicked}</span> times
            </small>
            <div className={styles.loveMe} ref={loveMeRef} onDoubleClick={createHeart}></div>
        </div>
    );
};

export default DoubleHeartClick;
