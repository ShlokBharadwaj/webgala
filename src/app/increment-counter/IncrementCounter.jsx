import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const updateCounter = (index) => {
            setCounters((prevCounters) => {
                const newCounters = [...prevCounters];
                const count = newCounters[index].count;
                const increment = count / 3500;
                newCounters[index].current = Math.min(count, Math.ceil((newCounters[index].current || 0) + increment));
                return newCounters;
            });
        };

        const updateCounters = () => {
            counters.forEach((_, index) => {
                updateCounter(index);
            });

            const hasPendingUpdates = counters.some((counter) => counter.current < counter.count);

            if (hasPendingUpdates) {
                requestAnimationFrame(updateCounters);
            }
        };

        updateCounters();
    }, [counters]);

    return (
        <div className={styles.container}>
            {counters.map((counter, index) => (
                <div key={index} className={styles.counterItem}>
                    <FontAwesomeIcon icon={counter.icon} className={styles.icons}/>
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