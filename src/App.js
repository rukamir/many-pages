import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbotronBanner from './Components/JumbotronBanner';
import sites from './Site-data/localhost';

class App extends Component {
  constructor() {
    super()
    this.state = {
      "sites" : sites
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JumbotronBanner mainHeading={this.state.sites.name} subheading={""}/>
      </div>
    );
  }
}

export default App;
