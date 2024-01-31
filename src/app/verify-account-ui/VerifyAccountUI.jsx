import React, { useRef, useEffect } from 'react';
import styles from './VerifyAccountUI.module.css';

const VerifyAccountUI = () => {
    const numberRefs = Array.from({ length: 6 }, () => useRef(null));

    const handleKeyDown = (e, idx) => {
        if (e.key >= 0 && e.key <= 9) {
            numberRefs[idx].current.value = '';
            setTimeout(() => numberRefs[idx + 1]?.current?.focus(), 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => numberRefs[idx - 1]?.current?.focus(), 10);
        }
    };

    useEffect(() => {
        numberRefs.forEach((ref, idx) => {
            ref.current.addEventListener('keydown', (e) => handleKeyDown(e, idx));
        });

        numberRefs[0]?.current?.focus();

        return () => {
            numberRefs.forEach((ref, idx) => {
                ref.current.removeEventListener('keydown', (e) => handleKeyDown(e, idx));
            });
        };
    }, [numberRefs]);

    return (
        <div className={styles.container}>
            <div className={`bg-[#caf0f8] rounded-md p-10 text-center shadow-2xl max-w-[90%] text-black`}>
                <h1 className="text-4xl">Verify your Account</h1>
                <p className="text-sm text-gray-700 pt-1">We messaged you the six-digit code to your registered mobile number: +91 867****762.</p>
                <p className="text-sm text-gray-700 pt-1">Please enter the code below to confirm your mobile number.</p>
                <div className={`${styles.numberContainer}`}>
                    {numberRefs.map((ref, idx) => (
                        <input
                            key={idx}
                            type="number"
                            className={styles.number}
                            placeholder="0"
                            min={0}
                            max={9}
                            ref={ref}
                            required
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerifyAccountUI;
