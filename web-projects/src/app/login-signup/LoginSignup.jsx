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
                <div className={styles.fromContainer}>
                    <div className={`${styles.form} ${styles.signInForm}`}>
                        <form>
                            <h3>Sign In</h3>
                            <input type="email" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />
                            <input type="submit" value='Login' />
                            <a href="#" className={styles.forgot}>Forgot Password</a>
                        </form>
                    </div>
                    <div className={`${styles.form} ${styles.signUpForm}`}>
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