import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack, faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './FeedbackUIDesign.module.css';

const FeedbackUIDesign = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [panelContent, setPanelContent] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const sendBtnRef = useRef(null);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const handleSubmitResponse = () => {
        if (selectedRating !== null) {
            const feedbackText = ['Unhappy', 'Neutral', 'Happy'][selectedRating];
            const heartIcon = [faHeartCrack, faHeart, faHeartCircleCheck][selectedRating];

            setPanelContent(
                <div className={styles.panelContent}>
                    <FontAwesomeIcon icon={heartIcon} className={styles.icon} />
                    <strong>Thank You!</strong>
                    <br />
                    <strong>Feedback: {feedbackText}</strong>
                    <p>We appreciate your feedback and we'll try to improve our customer support!</p>
                </div>
            );

            // Set buttonClicked to true after submitting the response
            setButtonClicked(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.panelContainer}>
                <strong>
                    {!buttonClicked ? `How would you rate your experience with us?` : ''}
                </strong>
                {panelContent ? (
                    <div className={styles.ratingsContainer}>{panelContent}</div>
                ) : (
                    <div className={styles.ratingsContainer}>
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`${styles.rating} ${selectedRating === index ? styles.active : ''}`}
                                onClick={() => handleRatingClick(index)}
                            >
                                <img
                                    src={`https://media${index}.giphy.com/media/${getImageUrl(index)}`}
                                    alt={`Rating ${index}`}
                                />
                                <small>{['Unhappy', 'Neutral', 'Happy'][index]}</small>
                            </div>
                        ))}
                    </div>
                )}
                {!panelContent && (
                    <button className={styles.button} onClick={handleSubmitResponse} ref={sendBtnRef}>
                        Submit Response
                    </button>
                )}
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
