import React from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

export default class tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: null
    };
    this.homeRoute = this.homeRoute.bind(this);
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    this.fetchTour(id);
    console.log(`The Tour id you are looking at is ${id}`);
  }

  homeRoute() {
    this.props.history.push('/tours');
  }
  fetchTour = id => {
    axios
      .get(`https://wanderlust-api.herokuapp.com/api/tours/${id}`)
      .then(res => {
        this.setState(() => ({ tour: res.data }));
        console.log(res.data, 'this is coming from tour.js file');
      })
      .catch(err => {
        console.error(err);
        alert(err, 'This error is occurring in the tour.js file');
      });
  };

  render() {
    console.log(this.state.tour);
    if (!this.state.tour) {
      return <div className="loading">Loading Tour Information</div>;
    } else {
      const { type, location, max_duration } = this.state.tour;
      return (
        <div>
          <h1>{location}</h1>
          <h2>{type}</h2>
          <h3>{max_duration}</h3>
          <div className="searchBarBtn" onClick={this.homeRoute}>
            Back to Results
          </div>
        </div>
      );
    }
  }
}
