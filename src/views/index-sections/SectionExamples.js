import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

 
 //core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/test.jfif")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href=""
                target="_blank"
              >
                Test Page 1
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/test.jfif")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Test Page 2
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
