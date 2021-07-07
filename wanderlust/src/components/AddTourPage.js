import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axiosAuth from '../reducers/axiosAuth';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Refer to this page to develop the upload portion
// https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
// https://github.com/funador/react-image-upload

class AddTourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max_duration: '',
      location: '',
      type: ''
    };
  }

  addNew = e => {
    axiosAuth()
      .post('https://wanderlust-api.herokuapp.com/api/tours', e)
      .then(res => {
        const tour = res.data;
        console.log(
          'This is the new tour object that was passed through',
          tour
        );
      })
      .catch(err => console.error(err));
  };

  addTour = e => {
    e.preventDefault();
    const tour = this.state;

    this.addNew(tour);
    this.setState({
      max_duration: '',
      location: '',
      type: '',
      id: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = e => {
    this.setState({ [e.target.name]: e.target.value });
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
        <div className="mainSection">
          <section className="mainContent">
            <section className="tripDetails">
              <Form className="addTourForm" onSubmit={this.addTour}>
                <FormGroup row>
                  <Label for="location" sm={4}>
                    Location:
                  </Label>
                  <Col sm={8}>
                    <input
                      onChange={this.handleInputChange}
                      placeholder="location"
                      type="text"
                      value={this.state.location}
                      name="location"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="maxDuration" sm={4}>
                    Max Duration:
                  </Label>
                  <Col sm={8}>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      placeholder="Max Duration"
                      value={this.state.max_duration}
                      name="max_duration"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="tourType" sm={4}>
                    Tour Type:
                  </Label>
                  <Col sm={8}>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      placeholder="Max Duration"
                      value={this.state.type}
                      name="type"
                    />
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Label for="location" sm={4}>
                    Location:
                  </Label>
                  <Col sm={8}>
                    <input
                      disabled
                      type="number"
                      onChange={this.handleDelete}
                      value={this.state.id}
                      name="id"
                      placeholder="id"
                    />
                  </Col>
                </FormGroup> */}
                <button type="submit">Add This Tour!</button>
                <button type="submit">Clear Fields</button>
              </Form>
            </section>
          </section>
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

export default AddTourPage;
