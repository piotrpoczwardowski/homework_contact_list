import React, { Component } from 'react';

import './App.css';



class App extends Component {

  state = {
    contacts : [
      {
        id: 1,
        name: 'Piotr',
        surname: 'Poczwardowski',
        number: '534429916'
      },
      {
        id: 2,
        name: 'Daria',
        surname: 'Werner',
        number: '551485921'
      },
      {
        id: 3,
        name: 'Paweł',
        surname: 'Poczwardowski',
        number: '551779251'
      }
    ]
  }
  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        y => contactId !== y.id
      )
    })

  }
  render() {
    return (
      <div className="App">
        <div className='contact_list'>
          <h1>Contact List</h1>
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
