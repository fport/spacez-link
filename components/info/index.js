import React, { useState, useEffect, useContext } from 'react';
import styles from './index.module.css';
import { MailContext } from '@cx/MailContext';

export default function Info() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(false);

  const { sendMail } = useContext(MailContext);

  useEffect(() => {
    if (email && pass) setErr(false);
  }, [email, pass]);

  /* eslint-disable */
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass && validateEmail(email)) {
      sendMail({
        email,
        pass,
      });
    } else {
      setErr(true);
    }
    setEmail('');
    setPass('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {err && (
          <span className={styles.errText}>You must fill in the blanks</span>
        )}
        <form onSubmit={handleSubmit}>
          <label className={styles.emailLabel}>Sender E-Mail</label>
          <input
            className={styles.contentInput}
            type="text"
            placeholder="E Mail (Required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email-succes" className={styles.emailLabel}>
            Authenticator password
          </label>
          <input
            className={styles.contentInput}
            type="password"
            placeholder="Password (Required)"
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
