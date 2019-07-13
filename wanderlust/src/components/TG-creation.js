import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class TGCreation extends Component {
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
            <section className="tgCreator">
              <div className="innerContent">
                <div className="headingDiv">
                  <h2 className="heading">Tour Guide</h2>
                </div>
                {/* Insert a form from ReactStrap to allow field input for the Tour Guide accoutn creation */}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default TGCreation;
