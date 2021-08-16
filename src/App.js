import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
                <Route exact path='/' component={Home} />          
                <Route path='/About' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
