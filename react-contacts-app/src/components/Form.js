import React, { useEffect, useState } from 'react';

const initialFormValue = { fullName: '', phone_number: '' };

export const Form = ({ contacts, addContact }) => {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (form.fullName === '' || form.phone_number === '') {
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Write your name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Write your phone number"
          onChange={onChangeInput}
        />
      </div>
      <div className='add-btn'>
        <button >Add</button>
      </div>
    </form>
  );
};
