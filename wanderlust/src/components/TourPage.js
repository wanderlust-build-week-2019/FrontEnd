import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

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
                {/* This will be the section that contains the selected or clicked on photo */}
              </div>
              <div className="uploadedPhotos">
                <div className="uploadedPhoto">
                  {/* This is where the uploaded your photos will be available to be clicked on to be seen in a larger size
                  
                  Stretch goal: Make it so the photos auto rotate*/}
                </div>
              </div>
            </section>
            <section className="tripDetails">
              <div className="left">
                <div className="genText">Trip Details</div>
                <div className="enterDetails">
                  <Form>
                    <FormGroup row>
                      <Label for="tourName" sm={4}>
                        Tour Name
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="tourName"
                          id="tourName"
                          placeholder="Enter the name of the tour."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="duration" sm={4}>
                        Duration
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="duration"
                          id="duration"
                          placeholder="How long is the tour?"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="tourCost" sm={4}>
                        Tour Price
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="number"
                          name="tourCost"
                          id="tourCost"
                          placeholder="Enter the price of the tour."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="cityName" sm={4}>
                        Location Of Tour
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="cityName"
                          id="cityName"
                          placeholder="What city(ies) will the tour be in?"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="tourType" sm={4}>
                        Tour Type
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="select"
                          name="tourType"
                          id="tourType"
                          defaultValue="Please make a selection..."
                        >
                          <option value="Professional">Professional</option>
                          <option value="Private">Private</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="tourDescription" sm={4}>
                        Tour Description
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="textarea"
                          name="tourDescription"
                          id="tourDescription"
                          placeholder="Please enter a brief description of the tour"
                        />
                      </Col>
                    </FormGroup>
                    <Button color="primary" size="lg" block>
                      Book this Tour!
                    </Button>
                  </Form>
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
