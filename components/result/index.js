import React from 'react';
import styles from './index.module.css';

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>http://www.heroku.com/api/furkanportakalx/submit</div>
        <button className={styles.btn}>Get Document</button>
      </div>
    </div>
  );
}
