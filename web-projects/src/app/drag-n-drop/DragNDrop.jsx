'use client';

import React, { useRef } from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {
  const fillRef = useRef(null);
  const emptiesRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.empty} useRef={emptiesRef}>
        <div className={styles.fill} draggable="true" useRef={fillRef}></div>
      </div>
      <div className={styles.empty} useRef={emptiesRef}></div>
      <div className={styles.empty} useRef={emptiesRef}></div>
      <div className={styles.empty} useRef={emptiesRef}></div>
      <div className={styles.empty} useRef={emptiesRef}></div>
    </div>
  );
};

export default DragNDrop;
