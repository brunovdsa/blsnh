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
              <div className="default-res">
                <img src={background} className="background" alt="background"></img>
                <div className="container">
                  <nav>
                    <img src={logo} alt="logo"></img>
                    <a href="/warzone">Warzone</a>
                    <a href="/guias">Guias</a>
                    <a href="/noticias">Noticias</a>
                    <a href="/sobre">Sobre</a>
                  </nav>                                  
                  <h2>Number one from Brazil, o melhor site sobre Warzone!</h2>
                </div>                                  
              </div>  

              <div className="mobile">
                <h1>
                  <a href="/">
                    <img src={logo} id="logo" alt="logo"></img>                  
                  </a>
                </h1>
                <div className="wrapper">
                  <ModalButton></ModalButton>
                </div>
                <img src={backgroundMobile} className="backgroundMobile" alt="background"></img>
              </div> 
          </section>       
      </div>        
    );
  }
}

export default HomeSection;