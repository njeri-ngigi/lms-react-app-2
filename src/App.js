import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/store';

import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import Navbar from './components/Navbar';

import './MyApp.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="MyApp">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login/" component={Login} />
              <Route path="/signup/" component={Signup} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
