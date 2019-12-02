import * as React from "react";
import { Form, Container, Button, Row, Col, Spinner } from "react-bootstrap";
import "../css/Style.css";

import {
  vendorSignUp,
  signUpForm,
  LoginThunkDispatch
} from "../../../Redux/ActionFiles/VendorActions";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";

interface VendorSignUpProps {
  isLoading?: boolean;
  signUp?: any;
}

interface VendorSignUpState {
  emailField: any;
  passwordField: any;
  passwordConfirmField: any;
  restaurantField: any;
  cuisineField: any;
  descriptionField: any;
  phoneNumberField: any;
  addressField: any;
  cityField: any;
  stateField: any;
  beginHoursField: any;
  endHoursField: any;
}

export class SignUp extends React.Component<
  VendorSignUpProps,
  VendorSignUpState
> {
  constructor(props: VendorSignUpProps) {
    super(props);
    this.state = {
      emailField: React.createRef(),
      passwordField: React.createRef(),
      passwordConfirmField: React.createRef(),
      restaurantField: React.createRef(),
      cuisineField: React.createRef(),
      descriptionField: React.createRef(),
      phoneNumberField: React.createRef(),
      addressField: React.createRef(),
      cityField: React.createRef(),
      stateField: React.createRef(),
      beginHoursField: React.createRef(),
      endHoursField: React.createRef()
    };
  }

  translateTime(timeStr: String): Number {
    let hours = parseInt(timeStr.substring(0, 2)) * 100;
    let mins = parseInt(timeStr.substring(3));
    let time = hours + mins;
    return time;
  }

  checkIfFormFilled(): Boolean {
    var email = this.state.emailField.current.value;
    var password = this.state.passwordField.current.value;
    var name = this.state.restaurantField.current.value;
    var description = this.state.descriptionField.value;
    var cuisine = this.state.cuisineField.current.value;
    var phone = this.state.phoneNumberField.current.value;
    var address = this.state.addressField.current.value;
    var city = this.state.cityField.current.value;
    var state = this.state.stateField.current.value;
    var open = this.state.beginHoursField.current.value;
    var close = this.state.endHoursField.current.value;

    if (
      email === "" ||
      password === "" ||
      name === "" ||
      description === "" ||
      cuisine === "" ||
      phone === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      open === "" ||
      close === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  // Initiates user sign-up on form submission
  handleSubmit(): boolean {
    if (!this.checkIfFormFilled()) {
      alert("Not all form fields filled!");
      return false;
    }

    const form: signUpForm = {
      email: this.state.emailField.current.value,
      password: this.state.passwordField.current.value,
      name: this.state.restaurantField.current.value,
      description: this.state.descriptionField.current.value,
      cuisine: this.state.cuisineField.current.value,
      phone: this.state.descriptionField.current.value,
      address: this.state.addressField.current.value,
      city: this.state.cityField.current.value,
      state: this.state.stateField.current.value,
      open: this.state.beginHoursField.current.value,
      close: this.state.endHoursField.current.value
    };

    // Make sure password and confirmation fields match
    if (form.password !== this.state.passwordConfirmField.current.value) {
      alert("Passwords do not match");
      return false;
    }

    this.props.signUp(form);
    return true;
  }

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  ref={this.state.emailField}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={this.state.passwordField}
                  type="password"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  ref={this.state.passwordConfirmField}
                  type="password"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formRestaurantName">
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control
                  ref={this.state.restaurantField}
                  type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formCuisineType">
                <Form.Label>Cuisine type</Form.Label>
                <Form.Control
                  ref={this.state.cuisineField}
                  type="text"
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  ref={this.state.descriptionField}
                  type="textarea"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBeginHours">
                <Row>
                  <Col>
                    <Form.Label>Opening hours</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      ref={this.state.beginHoursField}
                      type="time"
                    ></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Closing hours</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      ref={this.state.endHoursField}
                      type="time"
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  ref={this.state.addressField}
                  type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  ref={this.state.cityField}
                  type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formStatey">
                <Form.Label>State</Form.Label>
                <Form.Control
                  ref={this.state.stateField}
                  type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formStatey">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  ref={this.state.phoneNumberField}
                  type="number"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="buttonContainer">
              <Button
                variant="success"
                disabled={this.props.isLoading}
                type="button"
                onClick={() => this.handleSubmit()}
              >
                {this.props.isLoading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  "Create Account"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState): VendorSignUpProps => ({
  isLoading: state.vendor.login.isLoading
});

const mapDispatchToProps = (
  dispatch: LoginThunkDispatch
): VendorSignUpProps => ({
  signUp: (form: signUpForm) => dispatch(vendorSignUp(form))
});

const VendorSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default VendorSignUp;
