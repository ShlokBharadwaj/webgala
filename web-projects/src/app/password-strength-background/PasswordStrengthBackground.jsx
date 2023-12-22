import React from 'react';
import styles from './PasswordStrengthBackground.module.css';

const PasswordStrengthBackground = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bg} id='bg'></div>
      <div className='bg-white text-black rounded-md p-10 text-center shadow-md'>
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