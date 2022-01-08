import React from 'react';
import styles from './index.module.css';

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          className={styles.contentInput}
          type="text"
          placeholder="Regular input"
        />
        <input
          className={styles.contentInput}
          type="password"
          placeholder="Regular input"
        />
        <button className={styles.btn}>Submit</button>
      </div>
    </div>
  );
}
