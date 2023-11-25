import React, { useRef, useState } from 'react';
import styles from './FeedbackUIDesign.module.css';

const FeedbackUIDesign = () => {

    const [selectedRating, setSelectedRating] = useState(null);
    const panelRef = useRef(null);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    }

    const handleSubmitResponse = () => {
        console.log(`Submitted response: ${selectedRating}`)
    };

    return (
        <div className={styles.container}>
            <div className={styles.panelContainer} ref={panelRef}>
                <strong>How would you rate your <br />experience with us?</strong>
                <div className={styles.ratingsContainer}>
                    {['Unhappy', 'Neutral', 'Happy'].map((rating, index) => (
                        <div
                            key={index}
                            className={`${styles.rating} ${selectedRating === index ? styles.selected : ''}`}
                            onClick={() => handleRatingClick(index)}
                        >
                            <img
                                src={`https://media${index}.giphy.com/media/${getImageUrl(index)}`}
                                alt={rating}
                            />
                            <small>{rating}</small>
                        </div>
                    ))}
                </div>
                <button className={styles.button} onClick={handleSubmitResponse}>Submit Response</button>
            </div>
        </div>
    );
};

const getImageUrl = (index) => {
    const imageUrls = [
        'xYJhVe7tIy8KUZCwkW/giphy.gif?cid=ecf05e4708ony0jdekbsf7oa6wto0o8u8g8sr5qped9p8fkf&rid=giphy.gif&ct=s',
        'j4l0mCdcTFRyY4Bc5s/giphy.gif?cid=ecf05e476g38ig2o1ygj8v5xkd0oo964pzj1p0dzowr4ie4q&rid=giphy.gif&ct=g',
        'QWvra259h4LCvdJnxP/giphy.gif?cid=ecf05e477miawv5xxfdxax03lro8fzied4d9thwt55kmscix&rid=giphy.gif&ct=g',
    ];
    return imageUrls[index];
};

export default FeedbackUIDesign;