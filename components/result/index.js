import React from 'react';
import styles from './index.module.css';

/* eslint-disable react/prop-types */
export default function Info({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>{data}</div>
        <button className={styles.btn}>Get Document</button>
      </div>
    </div>
  );
}
