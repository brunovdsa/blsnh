import React, { Component } from 'react';

import GenericButton from '../common/GenericButton';
import mbackground from "../../img/mbackground.png";
import About from "../../views/About/index"
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
              <GenericButton></GenericButton>
            </div>
            <img className="background" src={mbackground}></img>            
          </section>
          <About></About>         
        </div>
    );
  }
}

export default Body;