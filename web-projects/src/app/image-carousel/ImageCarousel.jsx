import React, { useState, useEffect, useRef } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = () => {
    const images = [
        'https://source.unsplash.com/random/530x500/?landscape',
        'https://source.unsplash.com/random/530x500/?portrait',
        'https://source.unsplash.com/random/530x500/?India',
        'https://source.unsplash.com/random/530x500/?Sky'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    const changeImage = (index) => {
        setCurrentIndex(index);
        resetInterval();
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.imageContainer} style={{ transform: `translateX(${-currentIndex * 530}px)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 1}`} onClick={() => changeImage(index)} />
                ))}
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => changeImage((currentIndex - 1 + images.length) % images.length)}>Previous</button>
                <button onClick={() => changeImage((currentIndex + 1) % images.length)}>Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
