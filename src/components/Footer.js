import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center text-center py-3 my-4 border-top">
      <Container className="col-md-4 d-flex justify-content-center  align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 fw-bold">
          LOGO
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company Sdn. Bhd.</span>
      </Container>
    </footer>
  );
};

export default Footer;