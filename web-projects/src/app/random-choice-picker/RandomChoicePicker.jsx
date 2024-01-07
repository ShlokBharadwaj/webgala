import React, { useState, useEffect, useRef } from 'react';
import styles from './RandomChoicePicker.module.css';

const RandomChoicePicker = () => {

    const [tags, setTags] = useState([]);
    const textareaRef = useRef(null);
    const tagsContainerRef = useRef(null);
    const tagElementsRef = useRef([]);

    useEffect(() => {
        textareaRef.current.focus();
        tagElementsRef.current = Array.from(tagsContainerRef.current.children);
    }, []);

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleEnter();
        } else {
            handleSpace(e.target.value);
        }
    };

    const handleEnter = () => {
        const newTags = textareaRef.current.value.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim());
        setTags(newTags);

        setTimeout(() => {
            textareaRef.current.value = '';
        }, 10);

        randomSelect();
    };

    const handleSpace = (input) => {
        const newTags = input.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim());
        setTags(newTags);
    };

    const randomSelect = (input) => { };

    return (
        <div className={styles.container}>
            <div className={styles.choiceContainer}>
                <h3>Enter all of the choices divided by space(' ').
                    <br />Press Enter when you're done.
                </h3>
                <textarea
                    placeholder="Enter your choices here..."
                    ref={textareaRef}
                    onKeyUp={handleKeyUp}>
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