import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios  from 'axios'
import SingleContact from './SingleContact.js'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {}
    };
    this.selectContact= this.selectContact.bind(this)
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/contacts');
      const contacts = response.data;
      //console.log(contacts)
      this.setState({contacts})
    } catch (error) {
      console.log(error)
    }
  }
  async selectContact(contactId) {
    const response = await axios.get(`/api/contacts/${contactId}`)
    const individualContact = response.data;
    this.setState({selectedContact : individualContact})
  }
  render() {
    const contactSelected = this.state.selectedContact;
    //console.log(contactSelected)
    let displayedContact;
    if (Object.keys(contactSelected).length) {
      displayedContact = <SingleContact contact={contactSelected}/>
    } else {
      //console.log('what;s wrong with you')
      displayedContact = <ContactList selectContact ={this.selectContact} contacts={this.state.contacts} />
    }
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
        {displayedContact}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('app'));
