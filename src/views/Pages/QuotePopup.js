import React from "react";
import {Modal} from 'react-bootstrap';
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



function QuotePopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Request Free Quote
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <div>
              <Container>
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
                      <label>Description</label>
                      <Input
                        placeholder="Your product request..."
                        type="textarea"
                        rows="4"
                      />
                      <Row>
                        <Col style={{paddingLeft:280}} md="4">
                          <Button className="btn-fill" color="danger" size="lg">
                            Request
                          </Button>
                        </Col>
                      </Row>
                    </Form>

              </Container>
              </div>
      </Modal.Body>
    </Modal>
  );
}

export default QuotePopup;