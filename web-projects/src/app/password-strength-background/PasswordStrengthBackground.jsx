import React from 'react';
import styles from './PasswordStrengthBackground.module.css';

const PasswordStrengthBackground = () => {
  return (
    <div className="box-border flex flex-col items-center justify-center min-h-[100vh] overflow-hidden m-0">
      <div
        className="bg-cover bg-no-repeat bg-center absolute -z-10 -top-0 -left-0 -right-0 -bottom-0 w-full h-full blur-lg"
        style={{ backgroundImage: 'url("https://source.unsplash.com/random/?landscape")' }}
      ></div>

      <div className='bg-white text-black rounded-md p-10 text-center shadow-md mx-5'>
        <h1 className='text-3xl'>Image Strength Password</h1>
        <p className='text-sm text-gray-700 mt-2'>Enter long password to see the effect. <br />Hint: Use special characters to speed up the process.</p>
        <div className='my-8 text-left'>
          <label htmlFor="email" className='text-gray-800'>Email:</label>
          <input type="text" className='border block w-full p-2 rounded-md' id='email' placeholder='Enter you Email...' />
        </div>
        <div className='my-4 text-left'>
          <label htmlFor="password" className='text-gray-800'>Password:</label>
          <input type="password" className='border block w-full p-2 rounded-md' id='password' placeholder='Enter you Password...' />
        </div>
        <button className='bg-black text-white py-2 mt-4 inline-block w-1/2 rounded-md'>Submit</button>
      </div>
    </div>
  );
};

export default PasswordStrengthBackground;