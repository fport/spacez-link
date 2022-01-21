import React from 'react';
import styles from './index.module.css';

export default function DocsComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/docs.png" alt="docs" />
      </div>
    </div>
  );
}
