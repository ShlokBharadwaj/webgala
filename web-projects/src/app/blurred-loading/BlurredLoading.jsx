'use client'

import React, { useEffect, useState, useRef } from 'react';
import styles from './BlurredLoading.module.css';

const BlurredLoading = () => {
  const [load, setLoad] = useState(0);
  const loadTextRef = useRef(null);
  const bgRef = useRef(null);

  return (
    <div className={styles.main}>
      <section className={styles.bg} ref={bgRef}></section>
      <div className={styles.loadingText} ref={loadTextRef}>0%</div>
    </div>
  );
};

export default BlurredLoading;
