import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import classes from "../style/all.module.css";

const AddUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h4>Add New Product</h4>
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

            <Row>
              <Col lg="12">
                <Form.Group className="" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="jhondoe" />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
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
                <Form.Group controlId="imageFile">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group>
                  <Form.Label>Select Category</Form.Label>
                  <Form.Select>
                    <option>Electronics</option>
                    <option>Jewelery</option>
                    <option>Men's Clothing</option>
                    <option>Women's Clothing</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className={classes.space1}>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Eg: Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    rows={3}
                  />
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
