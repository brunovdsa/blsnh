import React, { Component } from 'react';
import Header from '../../components/common/Header/index';
import AboutSection from '../../components/Body/AboutSection/index';

class About extends Component {
  render() {
    return (
        <div>
          <Header></Header>      
          <AboutSection></AboutSection>
        </div>
    );
  }
}

export default About;