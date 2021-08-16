import React, { Component } from 'react';

import logo from "../../../img/logo.png";
import mobile from "../../../img/mobile.png";
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div>
            <header>
                <h1>
                  <a href="/">
                    <img src={logo} id="logo"></img>
                  </a>
                </h1>
                <h2 id="mobile-bars">
                  <button>
                    <img src={mobile}></img>
                  </button>                  
                </h2>
            </header>          
        </div>
    );
  }
}

export default Header;