'use client';

import React from 'react';
import styles from './DoubleVerticalSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
                <div className='bg-[#eca116]'>
                    <h1>Golden Horizons</h1>
                    <p>Welcoming a new day of possibilities</p>
                </div>
                <div className='bg-[#258bffe2]'>
                    <h1>Endless Skies</h1>
                    <p>Exploring the vastness of the atmosphere</p>
                </div>
                <div className='bg-[#196d169d]'>
                    <h1>Solitude</h1>
                    <p>Embracing the quiet beauty of nature</p>
                </div>
                <div className='bg-[#26aee98c]'>
                    <h1>Mystical Waters</h1>
                    <p>Unveiling secrets beneath the surface</p>
                </div>
                <div className='bg-[#1df27d]'>
                    <h1>Aurora Dreams</h1>
                    <p>Chasing the vibrant colors of the northern lights</p>
                </div>
                <div className='bg-[#3f4766e2]'>
                    <h1>Cosmic Symphony</h1>
                    <p>Listening to the harmony of the stars in the night sky</p>
                </div>
                <div className='bg-[#7667189d]'>
                    <h1>Serenity Valley</h1>
                    <p>Discovering peace in the heart of the mountains</p>
                </div>
                <div className='bg-[#c9a11e8c]'>
                    <h1>Enchanted Forest</h1>
                    <p>Wandering through a magical woodland of wonders</p>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652640988475-ff9ecb45662f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652979060932-73bb144525dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1653013351295-1a4fc7c2d38c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652903673810-07617dd01e1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652640988475-ff9ecb45662f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652979060932-73bb144525dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1653013351295-1a4fc7c2d38c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652903673810-07617dd01e1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652640988475-ff9ecb45662f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652979060932-73bb144525dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1653013351295-1a4fc7c2d38c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464)' }}></div>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652903673810-07617dd01e1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)' }}></div>
            </div>

            <div className={styles.actionButtons}>
                <button className={styles.downButton}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <button className={styles.upButton}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
    )
}

export default DoubleVerticalSlider;