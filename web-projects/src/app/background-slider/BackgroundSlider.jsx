'use client'

import React, { useState } from 'react';
import styles from './BackgroundSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BackgroundSlider = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        'https://source.unsplash.com/random/415/?cars',
        'https://source.unsplash.com/random/415/?nature',
        'https://source.unsplash.com/random/415/?food',
        'https://source.unsplash.com/random/415/?travel'
    ];

    const handleLeftClick = () => {
        setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    };

    const handleRightClick = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length)
    };

    return (
        <div className={styles.main}>
            <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}
                        style={{ backgroundImage: `url('${slide}')` }}
                    ></div>
                ))}
                <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={handleLeftClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default BackgroundSlider;