import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/form';
import Error from '../components/Error';
import input from '../utils/input';
import { signup } from '../actions/authActions';

import './containers.css';

class Signup extends Component {
  state = { name: '', username: '', email: '', password: '', errors: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(signup(this.state));
  };

  updatedInputValue = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  render() {
    const { signupErrors, signupSuccess } = this.props;
    let error = null;
    if (Boolean(signupErrors)) {
      error = <Error type="Error">{signupErrors}</Error>;
    }
    if (signupSuccess) {
      error = <Error type="Success">Signup successfull</Error>;
    }
    return (
      <div className="Signup">
        {error}
        <Form
          updated={this.updatedInputValue}
          submitted={this.handleSubmit}
          formType="Sign up"
          inputList={[
            input('text', 'Name', 'name', '3'),
            input('email', 'Email', 'email', '4'),
            input('text', 'Username', 'username', '5'),
            input('password', 'Password', 'password', '6'),
            input('password', 'Confirm Password', 'confirm_password', '7'),
          ]}
        />
        <p>
          <b>Note: error handling not working at the moment</b>
          <br />
          param constraints:
          <br /> name & username => 4 characters
          <br />
          username : unique
          <br /> password: 6 characters, mix of uppercase and lower case letters
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({
  authReducer: { signupErrors, signupSuccess, dispatch },
}) => ({
  signupErrors,
  signupSuccess,
  dispatch,
});

export default connect(mapStateToProps)(Signup);
