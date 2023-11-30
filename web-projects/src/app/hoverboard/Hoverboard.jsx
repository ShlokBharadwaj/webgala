import React, { useEffect, useRef } from 'react';
import styles from './Hoverboard.module.css';

const Hoverboard = () => {

    const containerRef = useRef(null);
    const colors = ["#9b2226", "#ae2012", "#bb3e03", "#ca6702", "#ee9b00", "#e9d8a6", "#94d2bd", "#0a9396", "#005f73", "#001219", "#ffba08", "#7400b8", "#55a630", "#ffea00"];
    const SQUARES = 500;

    useEffect(() => {
        const container = containerRef.current;

        const setColor = (element) => {
            const color = getRandomColor();
            element.style.background = color;
            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        };

        const removeColor = (element) => {
            element.style.background = "#1d1d1d";
            element.style.boxShadow = `0 0 2px #000`
        };

        const getRandomColor = () => {
            return colors[Math.floor(Math.random() * colors.length)];
        };

        
    })


    return (
        <div className={styles.container} ref={containerRef}>
        </div>
    )
}

export default Hoverboard;