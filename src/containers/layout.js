import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Signup from '../containers/signup';

import getItem from '../utils/getItem';

class Layout extends Component {
  state = {
    isUserLoggedIn: Boolean(getItem('user')),
  };

  logout = () => {
    localStorage.removeItem('user');
    this.setState({ ...this.state, isUserLoggedIn: false });
  };

  render() {
    console.log('myUser', Boolean(getItem('user')));
    return (
      <div>
        <Navbar state={this.state.isUserLoggedIn} logout={this.logout} />
        <Signup />
        {/* <Login /> */}
        <Footer />
      </div>
    );
  }
}

export default Layout;
