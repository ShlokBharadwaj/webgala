'use client';

import React from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.empty}>
        <div className={styles.fill} draggable="true">
          Drag me!
        </div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
      </div>
    </div>
  )
}

export default DragNDrop;