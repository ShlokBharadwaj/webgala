import React, { useRef } from 'react';
import styles from './SoundBoard.module.css';
import best from '../../../public/audio/best.mp3';
import notif1 from '../../../public/audio/notif1.mp3';
import notif2 from '../../../public/audio/notif2.mp3';
import notif3 from '../../../public/audio/notif3.mp3';
import pew from '../../../public/audio/pew.mp3';

const SoundBoard = () => {
    const audioRef = useRef(null);

    const playAudio = (audioFile) => {
        audioRef.current.src = audioFile;
        audioRef.current.play();
    };

    return (
        <div className={styles.container}>
            <button onClick={() => playAudio(best)}>Play Best Audio</button>
            <button onClick={() => playAudio(notif1)}>Play Notification 1</button>
            <button onClick={() => playAudio(notif2)}>Play Notification 2</button>
            <button onClick={() => playAudio(notif3)}>Play Notification 3</button>
            <button onClick={() => playAudio(pew)}>Play Pew Audio</button>
            <audio ref={audioRef} />
        </div>
    );
};

export default SoundBoard;
