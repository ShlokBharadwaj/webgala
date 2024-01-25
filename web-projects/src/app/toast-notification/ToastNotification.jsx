import React, { useState, useEffect, useRef } from 'react';
import styles from './ToastNotification.module.css';

const ToastNotification = () => {
    const [notifications, setNotifications] = useState([]);
    const timeoutRef = useRef(null);

    const messages = [
        { id: 1, text: 'Message One', type: 'success' },
        { id: 2, text: 'Message Two', type: 'error' },
        { id: 3, text: 'Message Three', type: 'warning' },
        { id: 4, text: 'Message Four', type: 'info' },
    ];

    const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const removeNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    };

    const createNotification = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    
        const randomMessage = getRandomMessage();
        const notification = {
            id: Math.floor(Math.random() * 100000000),
            type: randomMessage.type,
            text: randomMessage.text,
        };
    
        setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications, notification];
            
            timeoutRef.current = setTimeout(() => {
                removeNotification(notification.id);
            }, 3000);
    
            return updatedNotifications;
        });
    };    

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.toasts}>
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`${styles.toast} ${styles[notification.type]}`}
                    >
                        {notification.text}
                    </div>
                ))}
            </div>
            <button className={styles.btn} onClick={createNotification}>
                Show Notification
            </button>
        </div>
    );
};

export default ToastNotification;
