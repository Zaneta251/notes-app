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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Redirect-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Redirect;
