'use client';

import React, { useRef, useState, useEffect, createRef } from 'react';
import styles from './DragNDrop.module.css';

const DragNDrop = () => {
  const fillRef = useRef(null);
  const [emptiesRefs, setEmptiesRefs] = useState([]);
  const [currentDropTarget, setCurrentDropTarget] = useState(null);

  useEffect(() => {
    setEmptiesRefs((emptiesRefs) => Array(5).fill().map((_, i) => emptiesRefs[i] || createRef()));
  }, []);

  const handleDragStart = (e) => {
    fillRef.current.style.backgroundImage = 'none';
    e.dataTransfer.setData('application/json', JSON.stringify({}));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const empty = emptiesRefs[index].current;

    if (empty.classList.contains(styles.fill)) {
      return;
    }

    if (currentDropTarget && currentDropTarget !== empty) {
      currentDropTarget.classList.remove(styles.fill);
      currentDropTarget.style.backgroundImage = 'none';
    }

    empty.classList.add(styles.fill);
    empty.style.backgroundImage = 'url("https://source.unsplash.com/random/150x150")';

    setCurrentDropTarget(empty);
  };


  return (
    <div className={styles.container}>
      {emptiesRefs.map((emptyRef, index) => (
        <div
          key={index}
          className={`${styles.empty} ${currentDropTarget !== emptyRef.current ? styles.hovered : ''}`}
          ref={emptyRef}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {index === 0 && (
            <div
              className={`${styles.fill} ${currentDropTarget === emptyRef.current ? styles.fill : ''}`}
              draggable
              onDragStart={handleDragStart}
              ref={fillRef}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;

