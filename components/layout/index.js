import React from 'react';
import Seo from '../seo';

/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <>
      <Seo />
      <main>{children}</main>
    </>
  );
}

export default Layout;
