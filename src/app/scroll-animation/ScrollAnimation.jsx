import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollAnimation.module.css';

const ScrollAnimation = () => {
    const boxesRef = useRef([]);
    const [isVisible, setIsVisible] = useState(Array(20).fill(false));

    const checkBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxesRef.current.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                setIsVisible(prevState => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                });
            } else {
                setIsVisible(prevState => {
                    const newState = [...prevState];
                    newState[index] = false;
                    return newState;
                });
            }
        });
    };

    useEffect(() => {
        boxesRef.current = boxesRef.current.slice(0, 20);
        checkBoxes();
        window.addEventListener('scroll', checkBoxes);

        return () => {
            window.removeEventListener('scroll', checkBoxes);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1>Scroll to see the Animation.</h1>
            {[...Array(20)].map((_, index) => (
                <div
                    key={index}
                    className={`${styles.box} ${isVisible[index] ? styles.show : ''}`}
                    ref={el => (boxesRef.current[index] = el)}
                >
                    <h1>Some content</h1>
                </div>
            ))}
        </div>
    );
};

export default ScrollAnimation;
