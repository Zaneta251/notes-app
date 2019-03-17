import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Redirect.css';

class Redirect extends Component {
  render() {
    console.log("redirect");
    return (
      <div className="Redirect">
        <header className="Redirect-header">
          <img src={logo} className="Redirect-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Redirect;
