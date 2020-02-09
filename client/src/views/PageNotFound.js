import React from "react";
import { Container, Button } from "reactstrap";

const PageNotFound = () => (
  <section className="page_not_found">
    <Container>
      <h1 className="text-center">Page Not Found <span className="text-danger">404</span></h1>
      <div className="text-center">
        <Button primary>
          <a href="/">Home</a>
        </Button>
      </div>
    </Container>
  </section>
);

export default PageNotFound;
