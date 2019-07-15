import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Refer to this page to develop the upload portion
// https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
// https://github.com/funador/react-image-upload

class TourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
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
            <section className="uploadSection">
              <div className="clickToUpload photo">
                {/* This will be the upload section */}
              </div>
              <div className="uploadedPhotos">
                <div className="uploadedPhoto">
                  {/* This is where the photos that have been uploaded will be displayed */}
                </div>
              </div>
            </section>
            <section className="tripDetails">
              <div className="left">
                <div className="genText">Trip Details</div>
                <div className="enterDetails">
                  {/* Create a form here to take in the details of the trips that the Tour Guide will provide */}
                </div>
              </div>
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

export default TourPage;
