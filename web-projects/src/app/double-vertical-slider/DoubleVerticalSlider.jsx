'use client';

import React from 'react';
import styles from './DoubleVerticalSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const DoubleVerticalSlider = () => {

    const slideContent = [
        { title: 'Dawn', description: 'in all of its shades', color: '#c08009' },
        { title: 'Infinite Sea', description: 'with its endless possibilities', color: '#905a02e2' },
        { title: 'Shutter Island', description: 'with its mysteries', color: '#c08009' },
        { title: 'Alone', description: 'in the wilderness', color: '#046c009d' },
    ];

    const imageUrls = [
        'https://images.unsplash.com/photo-1652640988475-ff9ecb45662f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true',
        'https://images.unsplash.com/photo-1652979060932-73bb144525dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true',
        'https://images.unsplash.com/photo-1653013351295-1a4fc7c2d38c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true',
        'https://images.unsplash.com/photo-1652903673810-07617dd01e1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true'
    ];

    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

    const changeSlide = (direction) => {
        const slidesLength = imageUrls.length;
        if (direction === 'up') {
            setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
        } else if (direction === 'down') {
            setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                <div className={styles.leftSide}>
                    {slideContent.map((slide, index) => (
                        <div key={index} className={`bg-[${slide.color}]`}>
                            <h1 className={styles.h1}>{slide.title}</h1>
                            <p className={styles.p}>{slide.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.rightSide}>
                    {imageUrls.map((url, index) => (
                        <div key={index} style={{ backgroundImage: `url(${url})` }}></div>
                    ))}
                </div>
                <div className={styles.actionButtons}>
                    <button className={`${styles.downButton} ${styles.button} `} onClick={() => changeSlide('down')}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button className={`${styles.upButton} ${styles.button}`} onClick={() => changeSlide('up')}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoubleVerticalSlider;