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
    const [copyStatus, setCopyStatus] = useState('');

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

    const copyToClipboard = (content, label) => {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyStatus(`Copied '${label}: ${content}' to clipboard.`);
        setTimeout(() => setCopyStatus(''), 2000);
    }

    return (
        <div className={styles.container}>
            {isKeyPressed ? (
                <div ref={insertRef}>
                    <div className={styles.insertContainer}>
                        <p className={styles.p}>Press any key to get the keyCode</p>
                        <small className={styles.smallCopy}>Click on a key to copy its value.</small>
                    </div>
                    <div className={styles.key} onClick={() => copyToClipboard(keyInfo.key, 'Key')} title='Click to copy to clipboard.'>
                        {keyInfo.key}
                        <small>event.key</small>
                    </div>

                    <div className={styles.key} onClick={() => copyToClipboard(keyInfo.keyCode, 'Key Code')} title='Click to copy to clipboard.'>
                        {keyInfo.keyCode}
                        <small>event.keyCode</small>
                    </div>

                    <div className={styles.key} onClick={() => copyToClipboard(keyInfo.code, 'Code')} title='Click to copy to clipboard.'>
                        {keyInfo.code}
                        <small>event.code</small>
                    </div>
                </div>
            ) : (
                <div className={styles.key}>
                    Press any key to get the keyCode
                </div>
            )}
            {copyStatus && (
                <div className={styles.copyStatus}>{copyStatus}</div>
            )}
        </div>
    );
};

export default EventKeyCodes;
