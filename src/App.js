import React, { Component } from 'react';
import AddContactForm from './components/AddContactForm/AddContactForm'

import './App.css';



class App extends Component {

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        y => contactId !== y.id
      )
    })

  }

  addContact = (z) => {
    this.setState({
     contacts: this.state.contacts.concat({
       id:Date.now(),
       name: z.contactName,
       surname: z.contactSurName,
       number: z.contactNumber
     })
    })
  }
  render() {
    return (
      <div className="App">
        <div className='contact_list'>
       
          <h1>Contact List</h1>
          <AddContactForm  x={this.addContact}/>
          <div className='list'>
            <ul>
              {this.state.contacts.map(x => (
                <li key={x.id}>
                  <p>Imię: {x.name}</p>
                  <p>Nazwisko: {x.surname}</p>
                  <p>Numer tel: {x.number}</p>
                  <button onClick={() => this.removeContact(x.id)}>remove</button>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
