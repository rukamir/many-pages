import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbotronBanner from './Components/JumbotronBanner';
import RibbonText1 from './Components/RibbonText1';
import site from './Site-data/localhost';

class App extends Component {
  constructor() {
    super()
    this.state = {
      "name" : site.name,
      "phone" : site.phone,
      "page" : site.pages['index'],
      "sections" : site.pages['index'].sections
    }
  }

  loadSiteToState(siteObj) {
    this.setState(siteObj)
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
        <JumbotronBanner mainHeading={`Welcome to ${window.location.hostname}!`} subheading={"Subheading"}/>
        <RibbonText1 heading={"Hello"} body={["hello"]} />
      </div>
    );
  }
}

export default App;
