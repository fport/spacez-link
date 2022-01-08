import React, { useState, useContext } from 'react';
import Layout from '@c/layout';
import Seo from '@c/seo';
import Hero from '@c/hero';
import Info from '@c/info';
import Result from '@c/result';
import { MailContext } from '@cx/MailContext';

function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const [screen, setScreen] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const { todos, setTodos } = useContext(MailContext);
  console;
  return (
    <>
      <Layout>
        <Seo title="Hakkımızda" />
        <Hero />
        {!todos ? <Info /> : <Result data={todos} />}
      </Layout>
    </>
  );
}
export default LandingPage;
