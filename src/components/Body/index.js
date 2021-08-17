import React, { Component } from 'react';
import background from "../../img/background.jpg";

import './styles.css'

class Body extends Component {
  render() {
    return (
        <div>
          <img className="background" src={background}></img>
        </div>
    );
  }
}

export default Body;