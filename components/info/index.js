import React, { useState, useContext } from 'react';
import styles from './index.module.css';
import { MailContext } from '@cx/MailContext';

export default function Info() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const { sendMail } = useContext(MailContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      email,
      pass,
    });
    setEmail('');
    setPass('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.contentInput}
            type="text"
            placeholder="Regular input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.contentInput}
            type="password"
            placeholder="Regular input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
