import React from 'react';
import styles from './LoginSignup.module.css';

const LoginSignup = () => {
  return (
    <div className={styles.container}>
        <div className={styles.childContainer}>
            <div className={styles.initialContainer}>
                <div className={`${styles.box} ${styles.signIn}`}>
                    <h2>Already have an Account?</h2>
                    <button className={styles.signInBtn}>Sign in</button>
                </div>
                <div className={`${styles.box} ${styles.signUp}`}>
                    <h2>Don't have an Account?</h2>
                    <button className={styles.signUpBtn}>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default LoginSignup;