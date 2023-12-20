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

    const handleGenerateClick = () => {
        const typesArr = [
            { upper: includeUppercase },
            { lower: includeLowercase },
            { number: includeNumbers },
            { symbol: includeSymbols },
        ].filter(item => Object.values(item)[0]);

        if (typesArr.length === 0) {
            setPassword('');
            return;
        }

        let generatedPass = '';
        const typesCount = typesArr.length;

        for (let i = 0; i < passwordLength; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                generatedPass += randomFunc[funcName]();
            });
        }

        const finalPass = shuffle(generatedPass).slice(0, passwordLength);
        setPassword(finalPass);
    };

    const shuffle = i => {
        const arr = i.split('');
        arr.sort(() => 0.5 - Math.random());
        return arr.join('');
    };

    const handleCheckboxChange = checkbox => {
        switch (checkbox) {
            case 'uppercase':
                setIncludeUppercase(!includeUppercase);
                break;
            case 'lowercase':
                setIncludeLowercase(!includeLowercase);
                break;
            case 'numbers':
                setIncludeNumbers(!includeNumbers);
                break;
            case 'symbols':
                setIncludeSymbols(!includeSymbols);
                break;
            default:
                break;
        };
    };

    const handlePassLenChange = e => {
        const length = parseInt(e.target.value, 10);
        setPasswordLength(length);
    };

    const handleClipboardClick = async () => {
        const passToCopy = resultRef.current.value;

        if (!passToCopy)
            return;

        try {
            await navigator.clipboard.writeText(passToCopy);
            alert('Password is copied to your clipboard!');
        } catch (err) {
            console.error('Unable to copy to your clipboard: ', err);
        }
    }

    const passItems = [
        { id: 'length', label: 'Password Length', type: 'number', min: 8, max: 25, defaultValue: passwordLength },
        { id: 'uppercase', label: 'Include uppercase letters', type: 'checkbox', defaultChecked: includeUppercase },
        { id: 'lowercase', label: 'Include lowercase letters', type: 'checkbox', defaultChecked: includeLowercase },
        { id: 'numbers', label: 'Include numbers', type: 'checkbox', defaultChecked: includeNumbers },
        { id: 'symbols', label: 'Include symbols', type: 'checkbox', defaultChecked: includeSymbols },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.contianer}>
                <h2>Password Generator</h2>

                <div className={styles.resultContainer}>
                    <input
                        type="text"
                        readOnly
                        value={password}
                        ref={resultRef}
                    />
                    <button className={styles.btn} onClick={handleClipboardClick}>
                        <FontAwesomeIcon icon={faClipboard} />
                    </button>
                </div>

                <div className={styles.passConfigs}>
                    {passItems.map((item) => (
                        <div key={item.id} className={styles.config}>
                            <label htmlFor={item.id} className={styles.label}>{item.label}</label>
                            {item.type === 'number' ? (
                                <input
                                    type={item.type}
                                    id={item.id}
                                    min={item.min}
                                    max={item.max}
                                    value={item.defaultValue}
                                    onChange={handlePassLenChange}
                                />
                            ) : (
                                <input
                                    type={item.type}
                                    id={item.id}
                                    checked={item.defaultChecked}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <button className={`${styles.btn2} ${styles.btnLarge}`} onClick={handleGenerateClick}>Generate Password</button>
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