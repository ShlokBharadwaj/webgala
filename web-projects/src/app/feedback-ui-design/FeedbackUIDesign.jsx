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
                    <div className={styles.rating}>
                        <img src="https://media2.giphy.com/media/xYJhVe7tIy8KUZCwkW/giphy.gif?cid=ecf05e4708ony0jdekbsf7oa6wto0o8u8g8sr5qped9p8fkf&rid=giphy.gif&ct=s"
                            alt="Unhappy" />
                        <small>Unhappy</small>
                    </div>
                    <div className={styles.rating}>
                        <img src="https://media1.giphy.com/media/j4l0mCdcTFRyY4Bc5s/giphy.gif?cid=ecf05e476g38ig2o1ygj8v5xkd0oo964pzj1p0dzowr4ie4q&rid=giphy.gif&ct=g"
                            alt="Neutral" />
                        <small>Neutral</small>
                    </div>
                    <div className={styles.rating}>
                        <img src="https://media0.giphy.com/media/QWvra259h4LCvdJnxP/giphy.gif?cid=ecf05e477miawv5xxfdxax03lro8fzied4d9thwt55kmscix&rid=giphy.gif&ct=g"
                            alt="Happy" />
                        <small>Happy</small>
                    </div>
                </div>
                <button className={styles.button} ref={sendRef}>Submit Response</button>
            </div>
        </div>
    )
}

export default FeedbackUIDesign;