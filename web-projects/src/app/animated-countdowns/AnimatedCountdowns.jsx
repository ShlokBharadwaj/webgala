'use client';

import React, { useEffect } from 'react';
import styles from './AnimatedCountdowns.module.css';

const AnimatedCountdowns = () => {
    return (
        <div className='main'>
            <div className="counter">
                <div className="nums">
                    <span className="in">3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                </div>
                <h4>Get Ready!</h4>
            </div>
            
            <div className="final">
                <h1>GO</h1>
                <button id="replay">
                    <span>Replay</span>
                </button>
            </div>
        </div>
    )
}

export default AnimatedCountdowns