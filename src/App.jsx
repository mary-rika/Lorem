import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Switch>
            <Route
              exact
              path="/home"
              component={Home}
            />           
            <Route
              component={() => <Redirect to="/home" />}
            />
          </Switch>
    );
  }
}

export default App;