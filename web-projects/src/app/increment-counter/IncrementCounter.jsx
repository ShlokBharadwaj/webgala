import React, { useState } from 'react';
import styles from './IncrementCounter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';

const IncrementCounter = () => {

    const counterData = [
        { icon: faXTwitter, count: 32000, title: 'Followers' },
        { icon: faInstagram, count: 120000, title: 'Followers' },
        { icon: faGithub, count: 8000, title: 'Stars' },
        { icon: faReddit, count: 6000, title: 'Subscribers' }
    ];

    const [counters, setCounters] = useState(counterData);


    return (
        <div className={styles.container}>
            {counters.map((counter, index) => (
                <div key={index} className={styles.counterItem}>
                    <FontAwesomeIcon icon={counter.icon} />
                    <div className={styles.counter} data-target={counter.count}>
                        {counter.current || 0}
                    </div>
                    <span>{counter.title}</span>
                </div>
            ))}
        </div>
    );
};

export default IncrementCounter;