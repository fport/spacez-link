import React from 'react';
import styles from './index.module.css';
import {useCopyToClipboard} from '@utils'

/* eslint-disable react/prop-types */
export default function Info({ data }) {
 const [isCopied, copyToClipboard] = useCopyToClipboard({
    debug: true,
    message: 'Press #{x} to copy',
    interval: 3000,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.link} onClick={() => copyToClipboard(data)}>{data}</div>
        <span className={styles.copy}>{isCopied && 'kopyalandi'}</span>
        <button className={styles.btn}>Get Document</button>
      </div>
    </div>
  );
}
