import React from 'react';
import Layout from '@c/layout';
import Seo from '@c/seo';
import Hero from '@c/hero';

function LandingPage() {
  return (
    <>
      <Layout>
        <Seo title="Hakkımızda" />
        <Hero />
      </Layout>
    </>
  );
}
export default LandingPage;
