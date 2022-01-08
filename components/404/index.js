import React from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';

function ErrorComponent() {
  const router = useRouter();

  return (
    <div className={styles.error}>
      <p className={styles.errorText}>
        {router.pathname} Aradığınız {router.asPath} bulunamadı
      </p>
    </div>
  );
}

export default ErrorComponent;
