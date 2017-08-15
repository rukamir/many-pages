import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavPages extends Component {

    // get listItems () {
    //     return (this.props.pages.map((page, i) => {
    //         return (
    //         <li key={i} className="nav-item">
    //             <a className="nav-link" href={page}>{page}</a>
    //         </li>)
    //     }))
    // }

    get listItems () {
        return (this.props.pages.map((page, i) => {
                    return (
                    <NavItem eventKey={i} className="nav-item">
                        <a className="nav-link" href={page}>{page}</a>
                    </NavItem>)
                }))
    }

    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {this.listItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    // render () {
    //     return(
    //         <nav className="navbar navbar-inverse">
    //             <div className="container-fluid">
    //                 <div className="navbar-header">
    //                     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    //                     <span className="icon-bar"></span>
    //                     <span className="icon-bar"></span>
    //                     <span className="icon-bar"></span>                        
    //                     </button>
    //                     <a className="navbar-brand" href="#">WebSiteName</a>
    //                 </div>
    //                 <div className="collapse navbar-collapse" id="myNavbar">
    //                     <ul className="nav navbar-nav">                       
    //                         {this.listItems}
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //     )
    // }
}

export default NavPages;