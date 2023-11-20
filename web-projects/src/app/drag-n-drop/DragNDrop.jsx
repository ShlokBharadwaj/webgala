'use client';

import React, { useRef } from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {

  const fillRef = useRef(null);

  const dragStart = () => {
    fillRef.current.classList.add('styles.hold');
    setTimeout(() => (fillRef.current.className = 'invisible'), 0);
  };

  const dragEnd = () => {
    fillRef.current.className = 'fill';
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = () => {
    fillRef.current.classList.add('styles.hovered');
  };

  const dragLeave = () => {
    fillRef.current.className = 'empty';
  };

  const dragDrop = () => {
    fillRef.current.className = 'empty';
    fillRef.current.parentNode.appendChild(fillRef.current);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.empty} ${styles.draggable}`}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        <div className={styles.fill} draggable="true" ref={fillRef} onDragStart={dragStart} onDragEnd={dragEnd}>
        </div>
      </div>
      <div className={styles.empty} onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop}></div>
      <div className={styles.empty} onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop}></div>
      <div className={styles.empty} onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop}></div>
      <div className={styles.empty} onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop}></div>
    </div>
  )
}

export default DragNDrop;