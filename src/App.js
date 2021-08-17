import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home';
import Warzone from './views/Warzone'
import Guides from './views/Guides'
import News from './views/News'
import About from './views/About';


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
