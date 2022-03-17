import React from 'react';
import ContactRow from './ContactRow';

const ContactList = (props) => {
  console.log(props);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {props.contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
