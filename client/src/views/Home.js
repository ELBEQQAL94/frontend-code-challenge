import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Home = () => (
  <Container>
    <Jumbotron fluid={false} className="jumbotron">
      <h1 className="display-3">Hello, Reactjs!</h1>
      <p className="lead">
        The task is to implement a small webapp that will list the most starred
        Github repos that were created in the last 30 days. You'll be fetching
        the sorted JSON data directly from the Github API.
      </p>

      <p className="lead text-center pt-3">
        <Button className="landing_page_btn">
          <a href="/repos" className="nav-link">
            <span>🙏</span> GO TO App
          </a>
        </Button>
      </p>
    </Jumbotron>
  </Container>
);

export default Home;
