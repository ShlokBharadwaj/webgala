import React from 'react';
import styles from './LiveUserFilter.module.css';

const LiveUserFilter = () => {
  return (
    <div className={styles.parentContainer}>
        <div className={styles.container}>
            <header className={styles.header}>
                <h4 className={styles.title}>Live User Filter</h4>
                <small className={styles.subtitle}>Search by name or location</small>
                <input type="text" name='name' id='filter' placeholder='Search...' className='w-1/3 py-2 border-b-2 border-blue-500 outline-none focus:border-red-500 focus:outline-none' autoFocus/>
            </header>
            <ul className={styles.userList}>
                <li>
                    <h3>Loading...</h3>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LiveUserFilter;