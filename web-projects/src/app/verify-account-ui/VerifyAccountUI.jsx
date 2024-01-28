import React from 'react';
import styles from './VerifyAccountUI.module.css';

const VerifyAccountUI = () => {
    return (
        <div className={styles.container}>
            <div className={`bg-[#caf0f8] rounded-md p-10 text-center shadow-2xl max-w-[90%] text-black`}>
                <h1 className="text-4xl text-black">Verify your Account</h1>
                <p className="text-sm text-gray-700 pt-1">We messaged you the six-digit code to your registered mobile number: +91 867****762.</p>
                <p className="text-sm text-gray-700 pt-1">Please enter the code below to confirm your mobile number.</p>
                <div className={`${styles.numberContainer}`}>
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            className={styles.number}
                            placeholder="0"
                            min={0}
                            max={9}
                            required
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VerifyAccountUI;
