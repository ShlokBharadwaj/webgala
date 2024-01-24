import React from 'react';
import styles from './ToastNotification.module.css';

const ToastNotification = () => {
    return (
        <div className={styles.container}>
            <div className={styles.toasts}></div>
            <button className={styles.btn}>Show Notification</button>
        </div>
    )
}

export default ToastNotification;