import React, { createContext, useState } from 'react';

const MailContext = createContext();

/* eslint-disable react/prop-types */
const MailProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const sendMail = async (todo) => {
    try {
      const res = await fetch('/api/createTodo', {
        method: 'POST',
        body: JSON.stringify({ description: todo }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newTodo = await res.json();
      setTodos((prevTodos) => {
        const updatedTodos = [newTodo, ...prevTodos];
        return updatedTodos;
      });
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
