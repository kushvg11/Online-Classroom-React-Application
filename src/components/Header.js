import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="header row">
          <div className="col-sm-2 p-0 text-center">
            <img src="/images/logo.png" className="img-logo" alt="logo" />
          </div>
          <div className="col-sm-10 p-0">
            <h2 className="page-heading text-center">Online classNameroom App</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;