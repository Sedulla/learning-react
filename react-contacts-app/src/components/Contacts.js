import React, { useEffect, useState } from 'react';
import { Form } from './Form';
import { List } from './List';

export const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullName: 'Muhammad',
      phone_number: '777',
    },
    {
      fullName: 'Mustafa',
      phone_number: '333',
    },
    {
      fullName: 'Ahmad',
      phone_number: '111',
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form contacts={contacts} addContact={setContacts}></Form>
    </div>
  );
};
