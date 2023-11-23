import React, { useRef, useEffect, useState } from 'react';
import styles from './EventKeyCodes.module.css';

const EventKeyCodes = () => {
    const insertRef = useRef(null);
    const [keyInfo, setKeyInfo] = useState({
        key: '',
        keyCode: '',
        code: '',
    });
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            setIsKeyPressed(!false);
            setKeyInfo({
                key: event.key === ' ' ? 'Space' : event.key,
                keyCode: event.keyCode,
                code: event.code,
            });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.container}>
            {!isKeyPressed && (
                <div className={styles.key}>
                    Press any key to get the keyCode
                </div>
            )}
            {isKeyPressed && (
                <div ref={insertRef}>
                    <p className={styles.p}>Press any key to get the keyCode</p>
                    <div className={styles.key}>
                        {keyInfo.key}
                        <small>event.key</small>
                    </div>

                    <div className={styles.key}>
                        {keyInfo.keyCode}
                        <small>event.keyCode</small>
                    </div>

                    <div className={styles.key}>
                        {keyInfo.code}
                        <small>event.code</small>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventKeyCodes;
