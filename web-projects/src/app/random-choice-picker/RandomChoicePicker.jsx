import React, { useState, useEffect, useRef } from 'react';
import styles from './RandomChoicePicker.module.css';

const RandomChoicePicker = () => {

    const [tags, setTags] = useState([]);
    const textareaRef = useRef(null);
    const tagsContainerRef = useRef(null);
    const tagElementsRef = useRef([]);

    return (
        <div className={styles.container}>
            <div className={styles.choiceContainer}>
                <h3>Enter all of the choices divided by space(' ').
                    <br />Press Enter when you're done.
                </h3>
                <textarea
                    placeholder="Enter your choices here..."
                    ref={textareaRef}>
                </textarea>
                <div ref={tagsContainerRef}>
                    {tags.map((tag, index) => (
                        <span key={index}
                            className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RandomChoicePicker;