import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Restaurant</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/home"  className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/restaurant"  className="nav-link" >Restaurant</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/menu"  className="nav-link" >Menu</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/order-online" className="nav-link" >Order Online</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/team" className="nav-link" >Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" >Contact</NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
              </form>
            </div>
          </nav>
        );
    }
}

export default Navbar;