import React from 'react';

const ContactRow = (props) => {
  //console.log(props.selectContact);
  return (
    <tr onClick = {function() {return props.selectContact(props.contact.id)}}>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
