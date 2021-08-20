import React, { Component } from 'react';

import ModalButton from '../../common/ModalButton/index';
import backgroundMobile from "../../../img/backgroundMobile.png";
import background from "../../../img/background.png";
import logo from "../../../img/logo.png";

import './styles.css'

class HomeSection extends Component {
  render() {
    return (
      <div>
        <section className="main-section">
              <img src={background} className="background" alt="background"></img> 
              <h1>
                <a href="/">
                  <img src={logo} id="logo" alt="logo"></img>                  
                </a>
              </h1>
              <div className="wrapper">
                <ModalButton></ModalButton>
              </div>
              <img src={backgroundMobile} className="backgroundMobile" alt="background"></img>
          </section>       
      </div>        
    );
  }
}

export default HomeSection;