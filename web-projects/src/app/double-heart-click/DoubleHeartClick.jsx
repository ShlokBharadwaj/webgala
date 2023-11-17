'use client';

import React, { useState } from 'react';
import styles from './DoubleHeartClick.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const DoubleHeartClick = () => {
    const [timesClicked, setTimesClicked] = useState(0);
    const [hearts, setHearts] = useState([]);

    const createHeart = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const leftOffset = e.target.offsetLeft;
        const topOffset = e.target.offsetTop;

        const xInside = x - leftOffset;
        const yInside = y - topOffset;

        setTimesClicked((prevTimes) => prevTimes + 1);

        const newHeart = {
            id: Date.now(),
            x: xInside,
            y: yInside,
        };

        setHearts((prevHearts) => [...prevHearts, newHeart]);

        setTimeout(() => {
            setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
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
            <div className={styles.loveMe} onDoubleClick={createHeart}>
                {hearts.map((heart) => (
                    <FontAwesomeIcon
                        key={heart.id}
                        icon={faHeart}
                        className={styles.faHeart}
                        style={{ top: `${heart.y}px`, left: `${heart.x}px` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default DoubleHeartClick;
