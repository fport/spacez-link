import React, { useContext } from 'react';
import Layout from '@c/layout';
import Seo from '@c/seo';
import Hero from '@c/hero';
import Info from '@c/info';
import Result from '@c/result';
import { MailContext } from '@cx/MailContext';

function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const { todos, setTodos, removeError } = useContext(MailContext);
  const { isLoading, err } = useContext(MailContext);

  return (
    <>
      <Layout>
        <Seo title="Hakkımızda" />
        <Hero />
        {!todos ? (
          <Info isLoading={isLoading} error={err} removeError={removeError} />
        ) : (
          <Result data={todos} />
        )}
      </Layout>
    </>
  );
}
export default LandingPage;
