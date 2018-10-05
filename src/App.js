import React, { Component } from 'react';
import HeadLogo from './HeadLogo';
import DrugList from './DrugList';
import Desc from './Desc';

class App extends Component {
  render() {
    return (
      <div className="glob">
        <HeadLogo />
        <DrugList />
        <Desc />
      </div>
    );
  }
}

export default App;
