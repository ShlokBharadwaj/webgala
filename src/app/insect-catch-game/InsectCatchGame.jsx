import React, { useState, useEffect } from 'react';
import styles from './InsectCatchGame.module.css';
import Image from "next/image";

const InsectCatchGame = () => {

    const [currentScreen, setCurrentScreen] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedInsect, setSelectedInsect] = useState(null);
    const [insects, setInsects] = useState([]);

    useEffect(() => {
        let interval;
        if (currentScreen === 3) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
            addInsects();
        }
        return () => clearInterval(interval);
    }, [currentScreen]);

    const handlePlayGameClick = () => {
        setCurrentScreen(2);
    };

    const handleInsectSelection = (src, alt) => {
        setSelectedInsect({ src, alt });
        setCurrentScreen(3);
    };

    const handleBackButtonClick = () => {
        if (currentScreen === 2) {
            setCurrentScreen(1);
        }
        else if (currentScreen === 3) {
            setCurrentScreen(2);
            setSeconds(0);
            setScore(0);
            setInsects([]);
        }
    };

    const createInsects = () => {
        const { x, y } = getRandomLocation();
        const newInsect = {
            id: Date.now(),
            x,
            y,
            rotation: Math.random() * 360,
        };

        setInsects((prevInsects) => [...prevInsects, newInsect]);
    };

    const getRandomLocation = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = Math.random() * (width - 200) + 100;
        const y = Math.random() * (height - 200) + 100;

        return { x, y };
    };

    const addInsects = () => {
        setTimeout(createInsects, 1000);
        setTimeout(createInsects, 1500);
    };

    const catchInsects = (insectId) => {
        setScore((prevScore) => prevScore + 1);
        setInsects((prevInsects) => prevInsects.filter((insect) => insect.id !== insectId));
        addInsects();
    };

    return (
        <div className={`${styles.container} h-[100vh] overflow-hidden m-0 box-border text-center`}>

            {/* Screen 1 - Play Game*/}
            {currentScreen === 1 && (
                <div className='screen flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#2b9348]'>
                    <h1 className='text-5xl my-4'>Catch the Insect</h1>
                    <button className='btn border-0 bg-white text-[#2b9348] py-4 px-5 focus:outline-none hover:opacity-90 mt-10'
                        onClick={handlePlayGameClick}
                    >Play Game</button>
                </div>
            )}

            {/* Screen 2  - Choose Insect*/}
            {currentScreen === 2 && (
                <div className='screen flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#2b9348] overflow-auto sm:overflow-hidden'>
                    <h1 className='text-2xl my-4'>What&apos;s your favourite insect?</h1>
                    <ul className="insect-list flex flex-wrap justify-center list-none p-0 mt-10">
                        <li className="m-3">
                            <button
                                onClick={() => handleInsectSelection('https://images.unsplash.com/photo-1630942592547-d7d223e15dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Mantis')}
                                className={`bg-transparent border-2 w-[150px] h-[150px] active:bg-[#007f5f] hover:scale-110`}>
                                <p>Mantis</p>
                                <Image src="https://images.unsplash.com/photo-1630942592547-d7d223e15dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    alt="Mantis" className="w-full h-[120px] object-cover" height={100} width={100}/>
                            </button>
                        </li>
                        <li className="m-3">
                            <button
                                onClick={() => handleInsectSelection('https://images.unsplash.com/photo-1579776711405-534256abcbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=471&q=80', 'Spider')}
                                className="choose-insect-btn bg-transparent border-2 w-[150px] h-[150px] active:bg-[#007f5f] hover:scale-110">
                                <p>Spider</p>
                                <Image src="https://images.unsplash.com/photo-1579776711405-534256abcbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=471&q=80"
                                    alt="Spider" className="w-full h-[120px] object-cover" height={100} width={100}/>
                            </button>
                        </li>
                        <li className="m-3">
                            <button
                                onClick={() => handleInsectSelection('https://images.unsplash.com/photo-1527942213181-ddbaba2e1496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80', 'Cockroach')}
                                className="choose-insect-btn bg-transparent border-2 w-[150px] h-[150px] active:bg-[#007f5f] hover:scale-110">
                                <p>Cockroach</p>
                                <Image src="https://images.unsplash.com/photo-1527942213181-ddbaba2e1496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80"
                                    alt="Cockroach" className="w-full h-[120px] object-cover" height={100} width={100}/>
                            </button>
                        </li>
                    </ul>
                    <button
                        onClick={handleBackButtonClick}
                        className='btn border-0 bg-white text-[#2b9348] py-4 px-5 cursor-pointer focus:outline-none hover:opacity-90 mt-10'>
                        Back
                    </button>
                </div>
            )}

            {/* Screen 3 - End Game */}
            {currentScreen === 3 && (
                <div className="screen game-container flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#2b9348] relative">
                    <h3 id="time" className="absolute top-5 right-5">Time: {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}</h3>
                    <h3 id="score" className="absolute top-5 left-5">Score: {score}</h3>
                    {insects.map((insect) => (
                        <div
                            key={insect.id}
                            className='insect absolute'
                            style={{
                                top: `${insect.y}px`,
                                left: `${insect.x}px`,
                                transform: `rotate(${insect.rotation}deg)`,
                            }}
                            onClick={() => catchInsects(insect.id)}
                        >
                            <Image src={selectedInsect?.src} alt={selectedInsect.alt} className='w-[100px] h-[100px]' height={100} width={100}/>
                        </div>
                    ))}

                    {score > 10 && score <= 15 && (
                        <h5 id="message" className="message leading-6 bg-[rgba(0,0,0,0.5)] w-full p-5 z-[100] text-center text-white absolute transition-transform opacity-100">
                            Are you annoyed yet? <br />
                            You are playing an impossible game
                        </h5>
                    )}

                    {score > 15 && (
                        <h5 id="newMessage" className="new-message leading-6 bg-[rgba(0,0,0,0.5)] w-full p-5 z-[100] text-center text-white absolute transition-transform opacity-100">
                            Congratulations! <br />
                            You can now go outside and catch some real insects
                        </h5>
                    )}

                    <div className="flex flex-col items-center absolute bottom-5">
                        <button
                            onClick={handleBackButtonClick}
                            className='btn border-0 bg-white text-[#2b9348] py-4 px-5 cursor-pointer focus:outline-none hover:opacity-90'>
                            Back
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default InsectCatchGame;