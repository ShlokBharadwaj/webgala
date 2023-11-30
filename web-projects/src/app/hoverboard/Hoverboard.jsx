import React, { useState, useEffect, useRef } from 'react';
import styles from './Hoverboard.module.css';

const Hoverboard = () => {

    const containerRef = useRef(null);
    const colors = ["#9b2226", "#ae2012", "#bb3e03", "#ca6702", "#ee9b00", "#e9d8a6", "#94d2bd", "#0a9396", "#005f73", "#001219", "#ffba08", "#7400b8", "#55a630", "#ffea00"];
    const SQUARES = 500;
    const [squares, setSquares] = useState([]);

    useEffect(() => {

        const handleMouseOver = (event) => {
            setColor(event.target);
        };

        const handleMouseOut = (event) => {
            removeColor(event.target);
        };

        const squares = Array.from({ length: SQUARES }).map((_, index) => (
            <div
                key={index}
                className={styles.square}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
        ));

        setSquares(squares);
    }, []);

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className={styles.container} ref={containerRef}>
            {squares}
        </div>
    )
}

export default Hoverboard;