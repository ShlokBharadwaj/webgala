import React from 'react';
import styles from './ToastNotification.module.css';

const ToastNotification = () => {

    const messages = [
        {
            id: 1,
            text: 'Message One',
            type: 'success'
        },
        {
            id: 2,
            text: 'Message Two',
            type: 'error'
        },
        {
            id: 3,
            text: 'Message Three',
            type: 'warning'
        },
        {
            id: 4,
            text: 'Message Four',
            type: 'info'
        }
    ];

    const getRandomMessage = () => {
        return messages[Math.floor(Math.random() * messages.length)];
    };

    const getRandomType = () => {
        return ['success', 'error', 'warning', 'info'][Math.floor(Math.random() * 4)];
    };


    const createNotification = () => { }


    return (
        <div className={styles.container}>
            <div className={styles.toasts}></div>
            <button className={styles.btn} onClick={createNotification}>Show Notification</button>
        </div>
    )
}

export default ToastNotification;