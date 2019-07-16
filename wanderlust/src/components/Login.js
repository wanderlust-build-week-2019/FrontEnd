import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ' '
    };
  }

  changeHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  LoginSubmit = e => {
    const password = this.state.password;
    const user = this.state.username;
    localStorage.setItem(' ', user);
    console.log(password);
    console.log(user);
    if (password === 'Dracarys') {
      console.log('CORRECT');
    } else {
      console.log('Wrong password , DORK');
    }
  };

  render() {
    return (
      <div>
        <header className="headerBar">
          <div>
            <h1 className="headerH1">WanderLust</h1>
          </div>
          <nav className="headerNav">
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
          </nav>
        </header>
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
        <footer>
          <div className="left">
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
          </div>
          <div className="center">
            <div className="footerText">
              <h3 className="footerH3">WanderLust, Inc</h3>
              <h4 className="footerH40">Copyright 2019</h4>
            </div>{' '}
          </div>
          <div className="right">
            <div className="footerText">
              <Link to="/Privacy">Privacy</Link>
              <Link to="/Terms">Terms Of Use</Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
