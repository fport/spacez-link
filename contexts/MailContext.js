import React, { createContext, useState } from 'react';

const MailContext = createContext();

/* eslint-disable react/prop-types */
const MailProvider = ({ children }) => {
  const [todos, setTodos] = useState('');

  const sendMail = async (data) => {
    console.log(data);
    try {
      const res = await fetch(
        'https://spacez-link.herokuapp.com/api/submit/email-config',
        {
          method: 'POST',
          body: {
            email_username: data.email,
            email_password: data.pass,
          },
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const link = await res;
      setTodos(link);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MailContext.Provider
      value={{
        todos,
        sendMail,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, MailContext };
