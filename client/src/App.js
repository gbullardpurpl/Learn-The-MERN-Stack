import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
        /*
        * Removed StrictMode from wrapping entire App due to findDOMNode deprecation
        * until a better solution is found to actually fix the issue, GBJ 06-10-22
        */
        <div className="App">
          <AppNavbar />
          <React.StrictMode>
              <Container>
                <Row>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col xs="6">.col-6</Col>
                    <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col sm="4">.col-sm-4</Col>
                </Row>
              </Container>
          </React.StrictMode>
      </div>
    );
  }
}

export default App;
