import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.ballardspahr.com/-/media/images/offices/backgrounds/saltlakecity.jpg">
        <h1>Kessler Corp.</h1>
        <h2>Employee Directory</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Employee Directory </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to my first React Application - this application will let a user easily search their compay's employees to find some information about that employee,
              such as their contact information.
            </p>
            <br></br>
            <p>Technologies Used for this project:</p>
            <ul>
              <li>React, Framework website is built on</li>
              <li>Axios, to make an API call for the random "Employees"</li>
              <li>React Router DOM, for the seperate pages</li>
            </ul>
            <br></br>
            <p className="ty"> Thank you for visiting. - Andrew Kessler</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
