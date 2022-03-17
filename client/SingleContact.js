import React from 'react'
 
const SelectedContact = (props) => {
    console.log(props)
    return (<div id='single-contact'>
    <img src={props.contact.imageUrl} />
    <div id='contact-info'>
      <p>Name: {props.contact.name}</p>
      <p>Email: {props.contact.email}</p>
      <p>Phone: {props.contact.phone}</p>
    </div>
  </div>)
}

export default SelectedContact