import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Directory from './pages/Directory';
import SignUp from './pages/SignUp';
import Unknown from './pages/404';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/profile/:id" component={Directory} />
            <Route component={Unknown} />
          </Switch>
      </Router>       
    );
  }
}

export default App;