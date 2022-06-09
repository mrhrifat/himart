import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import classes from "../style/all.module.css";

const AddUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h4>Add New User</h4>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-6 m-auto">
          <Form className={classes.form}>
            <Row className={classes.space1}>
              <Col lg="6">
                <Form.Group className="" controlId="fname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="" controlId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col lg="6">
                <Form.Group className="" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="jhondoe" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="jhon@doe.com" />
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col lg="6">
                <Form.Group className="" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="*******" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="+8801" />
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col lg="4">
                <Form.Group className="" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="San Fransisco" />
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="" controlId="street">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" placeholder="San Fransisco" />
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="" controlId="no">
                  <Form.Label>No</Form.Label>
                  <Form.Control type="text" placeholder="4" />
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col lg="6">
                <Form.Group controlId="description">
                  <Form.Label>Search Your Location</Form.Label>
                  <Form.Control type="text" placeholder="San Fransisco" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group controlId="description">
                  <Form.Label>ZIP Code</Form.Label>
                  <Form.Control type="text" placeholder="493-8948" />
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col md="2">
                <Button variant="danger" type="submit">
                  Cancel
                </Button>
              </Col>
              <Col md="2">
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
