import React from 'react';
import DocsComponent from '@c/docs';
import Hero from '@c/hero';
import Layout from '@c/layout';
import Seo from '@c/seo';

export default function Docs() {
  return (
    <Layout>
      <Seo title="Documents" />
      <Hero />
      <DocsComponent />
    </Layout>
  );
}
