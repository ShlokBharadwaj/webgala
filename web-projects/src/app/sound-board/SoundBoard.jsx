import React, { useEffect, useRef } from 'react';
import styles from './SoundBoard.module.css';
import best from '../../../public/audio/best.mp3';
import notif1 from '../../../public/audio/notif1.mp3';
import notif2 from '../../../public/audio/notif2.mp3';
import notif3 from '../../../public/audio/notif3.mp3';
import pew from '../../../public/audio/pew.mp3';

const audioFiles = {
    notif1,
    notif2,
    notif3,
    best,
    pew,
};

const SoundBoard = () => {
    const sounds = ['notif1', 'notif2', 'notif3', 'best', 'pew'];
    const audioRefs = sounds.reduce((acc, sound) => {
        acc[sound] = useRef(null);
        return acc;
    }, {});

    const stopSongs = () => {
        sounds.forEach(sound => {
            const audio = audioRefs[sound].current;
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    };

    useEffect(() => {
        return () => {
            stopSongs()
        };
    }, []);

    return (
        <div className={styles.container}>
            {sounds.map(sound => (
                <React.Fragment key={sound}>
                    <audio ref={audioRefs[sound]} src={audioFiles[sound]} />
                    <button
                        className={styles.btn}
                        onClick={() => {
                            stopSongs();
                            audioRefs[sound].current.play();
                        }}
                    >
                        {sound}
                    </button>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SoundBoard;
