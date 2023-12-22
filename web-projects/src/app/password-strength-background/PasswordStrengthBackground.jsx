import React, { useState, useRef } from 'react';
import styles from './PasswordStrengthBackground.module.css';

const PasswordStrengthBackground = () => {

  const [blurValue, setBlurValue] = useState(15);
  const passwordRef = useRef(null);

  const handlePasswordInput = () => {
    const input = passwordRef.current.value;
    const length = input.length;
    const splChar = SpclChar(input);
    const newBlurValue = 15 - (length * 0.6 + splChar * 1.5);
    setBlurValue(newBlurValue);
  };

  const SpclChar = (str) => {
    var count = (str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    return count;
  };

  return (
    <div className="box-border flex flex-col items-center justify-center min-h-[100vh] overflow-hidden m-0">
      <div
        className="bg-cover bg-no-repeat bg-center absolute -z-10 -top-0 -left-0 -right-0 -bottom-0 w-full h-full"
        style={{ backgroundImage: 'url("https://source.unsplash.com/random/?landscape")', filter: `blur(${blurValue}px)` }}
      ></div>

      <div className='bg-white text-black rounded-md p-10 text-center shadow-md mx-5'>
        <h1 className='text-3xl'>Image Strength Password</h1>
        <p className='text-sm text-gray-700 mt-2'>Enter long password to see the effect. <br />Hint: Use special characters to speed up the process.</p>
        <div className='my-8 text-left'>
          <label htmlFor="email" className='text-gray-800'>Email:</label>
          <input type="text" className='border block w-full p-2 rounded-md' id='email' placeholder='Enter you Email...' onInput={handlePasswordInput} />
        </div>
        <div className='my-4 text-left'>
          <label htmlFor="password" className='text-gray-800'>Password:</label>
          <input type="password" className='border block w-full p-2 rounded-md' id='password' placeholder='Enter you Password...' ref={passwordRef} onInput={handlePasswordInput} />
        </div>
        <button className='bg-black text-white py-2 mt-4 inline-block w-1/2 rounded-md'>Submit</button>
      </div>
    </div>
  );
};

export default PasswordStrengthBackground;