
import React from "react";
import GoogleMap from "./GoogleMapView.js";


// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function ContactView() {
  React.useEffect(() => {
   
  });
  return (
    <>
    <div class = "main">
      <div className="section section section-dark landing-section">

      <Container>
        <Row>
          <Col md="6">    <GoogleMap /> </Col> &nbsp; &nbsp; 
          <Col className="ml-auto mr-auto" md="5">
            <h2 className="text-center">Contact Us</h2>
            <Form className="contact-form">
              <Row>
                <Col md="6">
                  <label>Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <label>Message</label>
              <Input
                placeholder="Tell us your thoughts and feelings..."
                type="textarea"
                rows="4"
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button className="btn-fill" color="danger" size="lg">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    </>
  );
}

export default ContactView;
