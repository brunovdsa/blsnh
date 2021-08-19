import React, { Component } from 'react';

import ModalButton from '../common/ModalButton/index';
import mbackground from "../../img/mbackground.png";
import logo from "../../img/logo.png";

import './styles.css'

class Body extends Component {
  render() {
    return (
      <div>
        <section className="main-section">
              <h1>
                <a href="/">
                  <img src={logo} id="logo" alt="logo"></img>
                </a>
              </h1>
              <div className="wrapper">
                <ModalButton></ModalButton>
              </div>
              <img src={mbackground} className="background" alt="background"></img>            
          </section>
      </div>        
    );
  }
}

export default Body;