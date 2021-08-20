import React, { Component } from 'react';

//import ModalButton from '../../common/ModalButton/index';
//import backgroundMobile from "../../../img/backgroundMobile.png";
//import background from "../../../img/background.jpg";
//import logo from "../../../img/logo.png";

import './styles.css'

class WarzoneSection extends Component {
  render() {
    return (
      <div className="warzone-container">    
        <div className="grid-item1 container">
          <h1 className="title">
            Warzone
          </h1>
        </div>
        <section>
        <div className="grid-item2 container">
          <h1 className="title">
            Warzone2
          </h1>
        </div>
        </section>
      </div>
    );
  }
}

export default WarzoneSection;