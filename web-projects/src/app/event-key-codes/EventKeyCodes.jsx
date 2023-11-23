import React, { useRef } from 'react';
import styles from './EventKeyCodes.module.css';

const EventKeyCodes = () => {

    const insertRef = useRef(null);
    
    return (
        <div className={styles.container}>
            <div ref={insertRef}>
                <div className={styles.key}>
                    Press any key to get the KeyCode
                </div>
            </div>
        </div>
    )
}

export default EventKeyCodes;