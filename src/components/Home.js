import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row className="py-lg-5">
        <Col md={8} className="mx-auto">
          <div className="text-center mt-4">
            <h1 className="fw-bold">Welcome</h1>
            <h3 className="mb-3">Click the button below to go to the team list page</h3>
            <Link to="/team" className="btn btn-primary" role="button">
              Team list page
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;