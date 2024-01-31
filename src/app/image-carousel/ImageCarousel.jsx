import React, { useState, useEffect, useRef } from 'react';
import styles from './ImageCarousel.module.css';
import Image from "next/image";

const ImageCarousel = () => {
    const images = [
        'https://source.unsplash.com/random/530x500/?landscape',
        'https://source.unsplash.com/random/530x500/?portrait',
        'https://source.unsplash.com/random/530x500/?India',
        'https://source.unsplash.com/random/530x500/?Sky'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);

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

    const calculateTranslation = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            return `${-currentIndex * containerWidth}px`;
        }
        return '0px';
    };

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div ref={containerRef} className={styles.imageContainer} style={{ transform: `translateX(${calculateTranslation()})` }}>
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            onClick={() => changeImage(index)} 
                            width={530}
                            height={500}
                            />
                    ))}
                </div>
                <div className={styles.buttonsContainer}>
                    <button onClick={() => changeImage((currentIndex - 1 + images.length) % images.length)}>Previous</button>
                    <button onClick={() => changeImage((currentIndex + 1) % images.length)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
