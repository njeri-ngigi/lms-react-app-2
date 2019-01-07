import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/form';
import Error from '../components/Error';
import input from '../utils/input';
import { login } from '../actions/authActions';

import './containers.css';

class Login extends Component {
  state = { username: '', password: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(login(this.state));
  };

  updatedInputValue = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  render() {
    const { loginErrors, loginSuccess } = this.props;
    console.log('ssss', loginSuccess, loginErrors);
    let error = null;
    if (Boolean(loginErrors)) {
      error = <Error type="Error">{loginErrors}</Error>;
    }
    if (loginSuccess) {
      error = <Error type="Success">Login successfull</Error>;
    }

    return (
      <div className="Login">
        {error}
        <Form
          updated={this.updatedInputValue}
          submitted={this.handleSubmit}
          formType="Login"
          inputList={[
            input('text', 'Username', 'username', '1'),
            input('password', 'Password', 'password', '2'),
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  authReducer: { dispatch, loginErrors, loginSuccess },
}) => ({
  dispatch,
  loginErrors,
  loginSuccess,
});

export default connect(mapStateToProps)(Login);
