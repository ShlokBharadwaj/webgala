import React from 'react';
import styles from './InsectCatchGame.module.css';

const InsectCatchGame = () => {
    return (
        <div className={`${styles.container} h-[100vh] overflow-hidden m-0 box-border text-center`}>
            <div className='screen flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#2b9348]'>
                <h1 className='text-5xl my-4'>Catch the Insect</h1>
                <button className='btn border-0 bg-white text-[#2b9348] py-4 px-5 cursor-pointer focus:outline-none hover:opacity-90'>Play Game</button>
            </div>
        </div>
    )
}

export default InsectCatchGame;