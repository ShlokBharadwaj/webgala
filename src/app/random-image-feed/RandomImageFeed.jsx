import React, { useState, useEffect } from 'react';
import styles from './RandomImageFeed.module.css';
import Image from "next/image";

const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300;
};

const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`;
};

const RandomImageFeed = () => {
    const [images, setImages] = useState([]);
    const randomImageURL = 'https://source.unsplash.com/random/';
    const rows = 10;

    useEffect(() => {
        const fetchImages = async () => {
            const imageArray = [];
            for (let i = 0; i < rows * 3; i++) {
                const size = getRandomSize();
                const imageURL = `${randomImageURL}${size}`;
                imageArray.push(imageURL);
            }
            setImages(imageArray);
        };

        fetchImages();
    }, []);

    return (
        <div className="bg-[#011627] box-border flex flex-col items-center justify-center min-h-full overflow-visible m-0 text-white">
            <h1 className="text-3xl mt-3 ml-0 mr-0 pt-5 text-center font-bold">Random Image Feed</h1>
            <div className={`${styles.container} flex items-center content-center flex-wrap max-w-5xl mt-3`}>
                {images.map((imageURL, index) => (
                    <Image key={index} src={imageURL} alt={`Random Image ${index + 1}`} className={styles.image} height={100} width={100} />
                ))}
            </div>
        </div>
    );
};

export default RandomImageFeed;
