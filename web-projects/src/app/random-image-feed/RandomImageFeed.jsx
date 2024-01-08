import React from 'react';
import styles from './RandomImageFeed.module.css';

const RandomImageFeed = () => {
    return (
        <div className="bg-[#f6fff8] box-border flex flex-col items-center justify-center min-h-full overflow-visible m-0 text-black">
            <h1 className="text-3xl mt-3 ml-0 mr-0 pt-5 text-center">Random Image Feed</h1>
            <div className={`${styles.container} flex items-center content-center flex-wrap max-w-4xl`}></div>
        </div>
    )
}

export default RandomImageFeed;