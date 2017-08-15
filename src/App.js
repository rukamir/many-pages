import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SitePage from './SitePage';
import site from './Site-data/localhost';
import 'bootstrap/dist/css/bootstrap.css';
import NavPages from './Components/NavPages';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      "domain" : window.location.hostname,
      "name" : site.name,
      "phone" : site.phone,
      "pages" : site.pages,
      "pageList" : site.pageList,
      "sections" : site.pages['index'].sections
    }
    // perform a GET to backend to receive site data
  }

  get routes() {
    return (this.state.pageList.map((page, i) => {
      return(<Route key={i} path={`/${page}`} component={() => <SitePage sections={this.state.pages[page].sections}/>}/>)
    }))
  }

  render() {
    return (
      <Router>
      <div>
        <NavPages pages={this.state.pageList} />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr/>
        {this.routes}
      </div>
      </Router>      
    );
  }
}

export default App;
