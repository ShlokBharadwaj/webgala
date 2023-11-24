import React, { useState } from 'react';
import styles from './FAQCollapse.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMessage, faTimes } from '@fortawesome/free-solid-svg-icons';

const FAQCollapse = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Frequently asked Questions</h1>
            <div className={styles.faqContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className={`${styles.faq} ${activeIndex === index ? styles.active : ''}`}>
                        <h3 className={styles.faqTitle}>
                            Lorem ipsum dolor sit amet?
                        </h3>

                        <p className={styles.faqText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus sed officia doloremque? Hic, eveniet doloribus natus ullam officia provident?
                        </p>
                        <button className={styles.faqToggle} onClick={() => handleToggleClick(index)}>
                            <FontAwesomeIcon
                                icon={activeIndex === index ? faTimes : faChevronDown}
                                className={styles.faqIcon}
                            />
                            <FontAwesomeIcon icon={faMessage} className={styles.hidden} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQCollapse;
