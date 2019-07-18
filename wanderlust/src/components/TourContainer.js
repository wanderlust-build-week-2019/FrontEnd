import React from 'react';
import Tour from './Tour';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TourContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tours: [] };
  }

  componentDidMount() {
    axios
      .get('https://wanderlust-api.herokuapp.com/api/tours')
      .then(res => {
        let tours = res.data;
        this.setState(() => ({ tours: res.data }));

        console.log('Successful get');
        console.log(tours);
      })
      .catch(err => {
        console.log('Server Error', err);
      });
  }
  render() {
    console.log(this.state.tours);
    return (
      <div>
        {this.state.tours.map((tour, index) => {
          return (
            <div key={index} className="individualTour">
              <Link to={`/tours/${tour.id}`}>{tour.location}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TourContainer;
