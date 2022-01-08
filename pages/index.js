import React, { useState } from 'react';
import Layout from '@c/layout';
import Seo from '@c/seo';
import Hero from '@c/hero';
import Info from '@c/info';
import Result from '@c/result';

function LandingPage() {
  const [screen, setScreen] = useState(1);
  return (
    <>
      <Layout>
        <Seo title="Hakkımızda" />
        <Hero />
        {screen === 1 ? <Info /> : <Result />}
      </Layout>
    </>
  );
}
export default LandingPage;
