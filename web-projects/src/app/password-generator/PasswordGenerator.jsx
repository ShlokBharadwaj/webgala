import React, { useState, useRef } from 'react';
import styles from './PasswordGenerator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

const PasswordGenerator = () => {

    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(20);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const resultRef = useRef(null);

    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    };

    const passItems = [
        { id: 'length', label: 'Password Length', type: 'number', min: 8, max: 25, defaultValue: 20 },
        { id: 'uppercase', label: 'Include uppercase letters', type: 'checkbox', defaultChecked: true },
        { id: 'lowercase', label: 'Include lowercase letters', type: 'checkbox', defaultChecked: true },
        { id: 'numbers', label: 'Include numbers', type: 'checkbox', defaultChecked: true },
        { id: 'symbols', label: 'Include symbols', type: 'checkbox', defaultChecked: true },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.contianer}>
                <h2>Password Generator</h2>

                <div className={styles.resultContainer}>
                    <span id='result' />
                    <button className={styles.btn} id='clipboard'>
                        <FontAwesomeIcon icon={faClipboard} />
                    </button>
                </div>

                <div className={styles.passConfigs}>
                    {passItems.map((item) => (
                        <div key={item.id} className={styles.config}>
                            <label htmlFor={item.id} className={styles.label}>{item.label}</label>
                            {item.type === 'number' ? (
                                <input type={item.type} id={item.id} min={item.min} max={item.max} value={item.defaultValue} />
                            ) : (
                                <input type={item.type} id={item.id} checked={item.defaultChecked} />
                            )}
                        </div>
                    ))}
                </div>

                <button className={`${styles.btn2} ${styles.btnLarge}`} id='generate'>Generate Password</button>
            </div>
        </div>
    );
};

const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>|/,.~`';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

export default PasswordGenerator;