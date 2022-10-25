import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    if (this.props.page === "home") {
      return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="nav-item link">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar" >
            <ul className="navbar-nav">
              <li className="nav-item"><a href="#features" className="link">Features</a></li>
              <li className="nav-item"><a href="#about-us" className="link">About Us</a></li>
              <li className="nav-item"><Link to="/contact-us" className="link">Contact Us</Link></li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/login" className="link">Login</Link></li>
              <li className="nav-item"><Link to="/register" className="link">Register</Link></li>
            </ul>
          </div>
        </nav>
      );
    }
    else if (this.props.page === "dashboard") {
      return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="nav-item link">Home</Link>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/" className="link">Logout</Link></li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;