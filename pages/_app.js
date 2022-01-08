import React from 'react';
import '@s/globals.css';
import { MailProvider } from '@cx/MailContext';

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <MailProvider>
      <Component {...pageProps} />
    </MailProvider>
  );
}

export default MyApp;
