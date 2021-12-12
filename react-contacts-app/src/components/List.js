import React, { useState } from 'react';

export const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
      <ul className="list">
        {filtered.map((contact, i) => {
          return (
            <li key={i}>
              <span>{contact.fullName}</span>
              <span>{contact.phone_number}</span>
            </li>
          );
        })}
      </ul>
      <p>Total contacts: ({filtered.length})</p>
    </>
  );
};
