import React from 'react';
import styles from './PasswordGenerator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PasswordGenerator = () => {
  return (
    <div className={styles.main}>
        <div className={styles.contianer}>
            <h2>Password Generator</h2>
        </div>
    </div>
  )
}

export default PasswordGenerator;