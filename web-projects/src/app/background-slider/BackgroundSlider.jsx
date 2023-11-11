'use client'

import React from 'react';
import styles from './BackgroundSlider.module.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackgroundSlider = () => {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.sliderCont}`}>
                <div className={`${styles.slide} ${styles.active}`}
                    style={{
                        backgroundImage: "url('https://source.unsplash.com/random/415/?cars')",
                    }}
                >
                </div>
                <div className={`${styles.slide}`}
                    style={{
                        backgroundImage: "url('https://source.unsplash.com/random/415/?nature')"
                    }}
                >
                </div>
                <div className={`${styles.slide}`}
                    style={{
                        backgroundImage: "url('https://source.unsplash.com/random/415/?food')"
                    }}
                >
                </div>
                <div className={`${styles.slide}`}
                    style={{
                        backgroundImage: "url('https://source.unsplash.com/random/415/?travel')"
                    }}
                >
                </div>

                <button className={`${styles.arrow} ${styles.leftArrow}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <button className={`${styles.arrow} ${styles.rightArrow}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default BackgroundSlider;