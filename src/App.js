import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home';
import Warzone from './components/Warzone/Warzone'
import Guides from './components/Guides/Guides'
import News from './components/News/News'
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
                <Route exact path='/' component={Home} />          
                <Route path='/warzone' component={Warzone} />
                <Route path='/guias' component={Guides} />
                <Route path='/noticias' component={News} />
                <Route path='/sobre' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
