import React from 'react';

import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ' '
    };
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  LoginSubmit = user => {
    axios
      .post('https://wanderlust-api.herokuapp.com/auth/login', this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(user);
  };
  render() {
    return (
      <div>
        <h3>Welcome to React WanderLust</h3>
        <div>Please Login</div>
        <div className="Login">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.changeHandle}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandle}
          />
          <br />
          <button color="success" size="large" onClick={this.LoginSubmit}>
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
