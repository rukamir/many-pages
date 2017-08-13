import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbotronBanner from './Components/JumbotronBanner';
import RibbonText1 from './Components/RibbonText1';
import SitePage from './SitePage';
import site from './Site-data/localhost';
import 'bootstrap/dist/css/bootstrap.css';
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
      "page" : site.pages['index'],
      "sections" : site.pages['index'].sections
    }
    // perform a GET to backend to receive site data
  }

  get routes() {
    //(<SitePage sections={this.state.pages[page].sections}/>)
    return (this.state.pageList.map((page, i) => {
      return(<Route key={i} path={`/${page}`} component={() => <SitePage sections={this.state.pages[page].sections}/>}/>)
    }))
  }

  render() {
    const Home = () => (
      <SitePage sections={site.pages['index'].sections} />
      // <div>
      //   <h2>Home</h2>
      // </div>
    )
    
    const About = () => (
      <SitePage sections={site.pages["about"].sections} />
      // <div>
      //   <h2>About</h2>
      // </div>
    )

    if (this.state.domain === "localhost") {
        console.log("You came here on localhost")
    }

    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr/>
        {this.routes}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/> */}
      </div>
      </Router>      
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <SitePage sections={this.state.sections} />
      // </div>
    );
  }
}

export default App;
