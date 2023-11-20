'use client';

import React, { useRef, useState } from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {
  const [parent, setParent] = useState(null);
  const fillRef = useRef(null);

  const dragStart = (e) => {
    e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox to enable dragging
    fillRef.current.classList.add(styles.hold);
    setTimeout(() => (fillRef.current.className = 'invisible'), 0);
  };

  const dragEnd = () => {
    fillRef.current.className = styles.fill;
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = () => {
    if (!parent) {
      fillRef.current.classList.add(styles.hovered);
    }
  };

  const dragLeave = () => {
    if (!parent) {
      fillRef.current.className = styles.empty;
    }
  };

  const dragDrop = () => {
    if (!parent) {
      setParent(fillRef.current.parentNode);
      fillRef.current.className = styles.empty;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.empty} ${styles.draggable}`}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        <div
          className={styles.fill}
          draggable="true"
          ref={fillRef}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        ></div>
      </div>
      <div
        className={styles.empty}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      ></div>
      <div
        className={styles.empty}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      ></div>
      <div
        className={styles.empty}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      ></div>
      <div
        className={styles.empty}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      ></div>
    </div>
  );
};

export default DragNDrop;
