import React from 'react';
import ContactRow from './ContactRow';

const ContactList = (props) => {
  //console.log(props.selectContact);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {props.contacts.map((contact) => {
          return <ContactRow  
            selectContact = {props.selectContact} 
            key={contact.id} 
            contact={contact} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
