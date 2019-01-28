import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Directory from './pages/Directory';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
//import Unknown from './pages/404';

class App extends Component {
  render() {
    return (      
      <Router>          
          <Switch>          
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/profile:/id" component={Profile} />
            <Route exact path="/profile/update/:id" component={UpdateProfile} />
          </Switch>
      </Router>       
    );
  }
}

export default App;