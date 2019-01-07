import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Aux from '../hoc/Aux';
import { logout } from '../actions/authActions';
import getItem from '../utils/getItem';

import './components.css';

class Navbar extends Component {
  logout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { isUserLoggedIn, loginSuccess } = this.props;
    console.log(
      '>>>>>',
      this.props.isUserLoggedIn,
      this.props,
      isUserLoggedIn,
      getItem('isUserLoggedIn'),
      loginSuccess,
    );
    const navLinks = this.props.isUserLoggedIn ? (
      <li className="logout" onClick={this.logout}>
        <Link to="/">Logout</Link>
      </li>
    ) : (
      <Aux>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup"> Sign up</Link>
        </li>
      </Aux>
    );

    return (
      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {navLinks}
          </ul>
        </nav>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = ({
  authReducer: { isUserLoggedIn, loginSuccess },
}) => ({
  isUserLoggedIn,
  loginSuccess,
});

export default connect(mapStateToProps)(Navbar);
