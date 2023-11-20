'use client';

import React, { useRef, useState } from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {
  const fillRef = useRef(null);
  const emptiesRefs = Array.from({ length: 4 }, () => useRef(null));
  const [currentDropTarget, setCurrentDropTarget] = useState(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const empty = e.target;

    empty.classList.add(styles.fill);

    if (currentDropTarget && currentDropTarget !== empty) {
      currentDropTarget.classList.remove(styles.fill);
    }

    setCurrentDropTarget(empty);
  };

  return (
    <div className={styles.container}>
      {emptiesRefs.map((emptyRef, index) => (
        <div
          key={index}
          className={`${styles.empty} ${currentDropTarget === emptyRef.current ? styles.hovered : ''}`}
          ref={emptyRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        ></div>
      ))}
      <div
        className={styles.fill}
        draggable="true"
        onDragStart={handleDragStart}
        ref={fillRef}
      ></div>
    </div>
  );
};

export default DragNDrop;
