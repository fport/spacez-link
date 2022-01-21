import React from 'react';
import styles from './index.module.css';
import { Postman } from '@svg';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.heroTitle}>E-Mail Sender for Website</a>
      </Link>

      <div className={styles.content}>
        <p className={styles.contentText}>
          This is a application that makes easy to integrate email service. The
          application provides an easy method when you want to integrate Email
          service.
        </p>
        <Postman />
      </div>
    </div>
  );
}
