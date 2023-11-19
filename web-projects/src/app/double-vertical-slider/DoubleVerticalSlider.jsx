'use client';

import React from 'react';
import styles from './DoubleVerticalSlider.module.css';

const DoubleVerticalSlider = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className='bg-[#c08009]'>
                <h1>Dawn</h1>
                <p>in all of its shades</p>
            </div>
            <div className='bg-[#905a02e2]'>
                <h1>Infinite Sea</h1>
                <p>with its endless possibilities</p>
            </div>
            <div className='bg-[#046c009d]'>
                <h1>Alone</h1>
                <p>in the wilderness</p>
            </div>
            <div className='bg-[#1b88b78c]'>
                <h1>Shutter Island</h1>
                <p>in the ocean</p>
            </div>
        </div>
    </div>
  )
}

export default DoubleVerticalSlider;