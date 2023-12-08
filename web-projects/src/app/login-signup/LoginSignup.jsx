import React, { useState } from 'react';
import styles from './LoginSignup.module.css';

const LoginSignup = () => {
    const [isSignInActive, setSignInActive] = useState(true);

    const handleSignUpClick = () => {
        setSignInActive(false);
    };

    const handleSignInClick = () => {
        setSignInActive(true);
    };

    return (
        <div className={`${styles.container} ${isSignInActive ? '' : styles.active}`}>
            <div className={styles.childContainer}>
                <div className={styles.initialContainer}>
                    <div className={`${styles.box} ${styles.signIn}`}>
                        <h2>Already have an Account?</h2>
                        <button className={styles.signInBtn} onClick={handleSignInClick}>Sign in</button>
                    </div>
                    <div className={`${styles.box} ${styles.signUp}`}>
                        <h2>Don't have an Account?</h2>
                        <button className={styles.signUpBtn} onClick={handleSignUpClick}>Sign up</button>
                    </div>
                </div>
                <div className={styles.fromContainer}>
                    <div className={`${styles.form} ${styles.signInForm} ${isSignInActive ? styles.active : ''}`}>
                        <form>
                            <h3>Sign In</h3>
                            <input type="email" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />
                            <input type="submit" value='Login' />
                            <a href="#" className={styles.forgot}>Forgot Password</a>
                        </form>
                    </div>
                    <div className={`${styles.form} ${styles.signUpForm} ${!isSignInActive ? styles.active : ''}`}>
                        <form>
                            <h3>Sign Up</h3>
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <input type="submit" value='Register' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;