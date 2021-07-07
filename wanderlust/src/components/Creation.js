import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Creation extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="fullPage">
        <header className="headerBar">
          <div>
            <h1 className="headerH1">WanderLust</h1>
          </div>
          <nav className="headerNav">
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
          </nav>
        </header>
        <div className="mainSection">
          <div className="mainContent">
            <div className="accountDecider">
              <h2>What type of an account are you creating?</h2>
              <div className="deciderButtons">
                <button>
                  <NavLink to="/Tour-Guide/Account-Creation">
                    Tour Guide
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/Experiencer/Account-Creation">
                    Experiencer
                  </NavLink>
                </button>
              </div>
            </div>
            <section className="Creator">
              <div className="innerContent">
                <div className="headingDiv">
                  <h2 className="heading">Tour Guide</h2>
                </div>
                <Form>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                      />
                    </Col>
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </div>
            </section>
            <section className="Creator">
              <div className="innerContent">
                <div className="headingDiv">
                  <h2 className="heading">Experiencer</h2>
                </div>
                <Form>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                      />
                    </Col>
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </div>
            </section>
          </div>
        </div>
        <section className="footer">
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
        </section>
      </div>
    );
  }
}

export default Creation;
