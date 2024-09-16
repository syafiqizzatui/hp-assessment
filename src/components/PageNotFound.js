import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (<Container>
    <Row className="py-lg-5">
      <Col md={8} className="mx-auto">
        <div className="text-center mt-4">
          <h1 className="fw-bold">404</h1>
          <h3 className="mb-3">Page not found</h3>
          <Link to="/" className="btn btn-primary" role="button">
            Back to Home
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default PageNotFound;
