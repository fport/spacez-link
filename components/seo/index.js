import React from 'react';
import Head from 'next/head';

/* eslint-disable react/prop-types */
export default function Seo({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/kodizim.ico" />
      <title>Kodizim - {title}</title>
      <meta name="description" content="Kodizm - İzini Koda Bırak" />
      <meta name="yandex-verification" content="6adff61af2926794" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="https://twitter.com/Kodizimcom" />
      <meta
        name="twitter:description"
        content="https://twitter.com/Kodizimcom"
      />
      <meta name="twitter:site" content="https://twitter.com/Kodizimcom" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#1d252d" />

      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
