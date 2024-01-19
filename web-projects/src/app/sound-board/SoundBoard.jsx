import React, { useRef } from 'react';
import styles from './SoundBoard.module.css';

const audioFiles = [
    { name: 'Audio 1', file: '/audio/best.mp3' },
    { name: 'Audio 2', file: '/audio/notif1.mp3' },
    { name: 'Audio 3', file: '/audio/notif2.mp3' },
    { name: 'Audio 4', file: '/audio/notif3.mp3' },
    { name: 'Audio 5', file: '/audio/pew.mp3' },
];

const SoundBoard = () => {
    const audioRef = useRef(null);

    const playAudio = (audioFile) => {
        audioRef.current.src = audioFile;
        audioRef.current.play();
    };

    return (
        <div className={styles.container}>
            {audioFiles.map((audio, index) => (
                <button key={index} onClick={() => playAudio(audio.file)} className={styles.btn}>
                    {`Play ${audio.name}`}
                </button>
            ))}
            <audio ref={audioRef} />
        </div>
    );
};

export default SoundBoard;
