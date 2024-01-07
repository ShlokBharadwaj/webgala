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

    const randomSelect = () => {
        const times = 40;
        let count = 0;

        const interval = setInterval(() => {
            const randomTag = pickRandomTag();

            if (randomTag !== undefined) {
                highlightTag(randomTag);

                setTimeout(() => {
                    unHighlightTag(randomTag);
                }, 100);
            }

            count++;
            if (count === times) {
                clearInterval(interval);

                setTimeout(() => {
                    const randomTag = pickRandomTag();
                    highlightTag(randomTag);
                }, 100);
            }
        }, 100);
    };

    const pickRandomTag = () => {
        return tags.length > 0 ? tags[Math.floor(Math.random() * tags.length)] : undefined;
    };

    const highlightTag = (tag) => {
        tagElementsRef.current.forEach((element) => {
            if (element.innerText === tag) {
                element.classList.add('highlight');
            }
        });
    };

    const unHighlightTag = (tag) => {
        tagElementsRef.current.forEach((element) => {
            if (element.innerText === tag) {
                element.classList.remove('highlight');
            }
        });
    };

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
    );
};

export default RandomChoicePicker;