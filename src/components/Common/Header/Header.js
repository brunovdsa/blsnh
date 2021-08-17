import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

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
                    <img src={logo} id="logo" alt="logo"></img>
                  </a>
                </h1>
                <span className="mobile-bars">
                    <DropdownButton 
                      id="dropdown-basic-button" 
                      title={
                        <img src={mobile} alt="Dropdown menu"></img>
                      }>                      
                      <Dropdown.Item href="/warzone">Warzone</Dropdown.Item>
                      <Dropdown.Item href="/guias">Guias</Dropdown.Item>                      
                      <Dropdown.Item href="/noticias">Noticias</Dropdown.Item>
                      <Dropdown.Item href="/sobre">Sobre</Dropdown.Item>
                    </DropdownButton>
                </span>

                <span className="desktop-nav">
                  <nav>
                    <a href="/warzone">Warzone</a>
                    <a href="/guias">Guias</a>
                    <a href="/noticias">Noticias</a>
                    <a href="/sobre">Sobre</a>
                  </nav>
                </span>
            </header>          
        </div>
    );
  }
}

export default Header;