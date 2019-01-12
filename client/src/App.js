import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Directory from './pages/Directory';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/profile/:id" component={Directory} />
            <Route component={404} />
          </Switch>
        </div>
      </Router>       
    );
  }
}

export default App;