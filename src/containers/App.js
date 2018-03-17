import React, { Component } from 'react';
import './App.css';

import ListaSugerida from '../components/ListaSugerida';

class App extends Component {
  
  render() {
    return (
      <div className="App container-buy-size-store">
        <ListaSugerida />
      </div>
    );
  }
}

export default App;
