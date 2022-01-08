import React from 'react';
import styles from './index.module.css';
import { Postman } from '@svg';

export default function Hero() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heroTitle}>E-Mail Tracker for Business Website</h2>

      <div className={styles.content}>
        <p className={styles.contentText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <Postman />
      </div>
    </div>
  );
}
