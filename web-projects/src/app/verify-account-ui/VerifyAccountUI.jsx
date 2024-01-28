import React from 'react';
import styles from './VerifyAccountUI.module.css';

const VerifyAccountUI = () => {
    return (
        <div className={styles.container}>
            <div className="bg-[#caf0f8] rounded-md p-10 text-center shadow-2xl max-w-[90%]">
                <h1 className="text-4xl text-black">Verify your Account</h1>
            </div>
        </div>
    )
}

export default VerifyAccountUI;