import React from 'react';
import styles from './TestimonialBoxSwitcher.module.css';

const TestimonialBoxSwitcher = () => {
    return (
        <div className={`${styles.container} box-border flex flex-col items-center justify-center min-h-screen overflow-hidden p-3 bg-[#f1faee] text-white`}>
            <div className="testimonial-container bg-[#457b9d] rounded-lg m-5 p-12 max-w-3xl relative">TestimonialBoxSwitcher</div>
        </div>
    )
}

export default TestimonialBoxSwitcher;