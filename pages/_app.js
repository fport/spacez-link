import React from 'react';
import '@s/globals.css';

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
