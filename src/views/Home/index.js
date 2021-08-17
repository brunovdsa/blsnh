import React, { Component } from 'react';
import Header from '../../components/common/Header/index';
import Body from '../../components/Body/index';

class Home extends Component {
  render() {
    return (
        <div>
          <Header></Header>
          <Body></Body>
        </div>
    );
  }
}

export default Home;