import React from 'react';
import './App.css';
import Contacts from './Contacts/Contacts';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Contacts />
      </div>
    )
  }
}

export default App;