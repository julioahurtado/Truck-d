import * as React from "react";
import { Form, Container, Button, Spinner } from "react-bootstrap";
import "../css/Style.css";

import {
  vendorSignIn,
  signInForm,
  LoginThunkDispatch
} from "../../../Redux/ActionFiles/VendorActions";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { timeout } from "q";

interface VendorSignInProps {
  id?: number;
  isLoading?: boolean;
  signIn?: any;
}

interface VendorSignInState {
  emailField: React.RefObject<any>;
  passwordField: React.RefObject<any>;
}

export class SignIn extends React.Component<
  VendorSignInProps,
  VendorSignInState
> {
  constructor(props: VendorSignInProps) {
    super(props);
    this.state = {
      emailField: React.createRef(),
      passwordField: React.createRef()
    };
  }

  checkFields(): boolean {
    var email = this.state.emailField.current.value;
    var password = this.state.passwordField.current.value;

    if (email === "" || password === "") {
      return false;
    } else {
      return true;
    }
  }

  // Initiates user sign-in on form submission
  handleSubmit(): boolean {
    if (!this.checkFields()) {
      alert("Please fill out both email and password fields!");
      return false;
    }

    const form: signInForm = {
      email: this.state.emailField.current.value,
      password: this.state.passwordField.current.value
    };

    this.props.signIn(form);
    return true;
  }

  render() {
    if (this.props.id != -1) {
      return <Redirect to={"/vendor/actions"} />;
    }

    return (
      <Container>
        <Form>
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
          <Button
            variant="primary"
            disabled={this.props.isLoading}
            type="button"
            onClick={() => this.handleSubmit()}
          >
            {this.props.isLoading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState): VendorSignInProps => ({
  id: state.vendor.profile.id,
  isLoading: state.vendor.login.isLoading
});

const mapDispatchToProps = (
  dispatch: LoginThunkDispatch
): VendorSignInProps => ({
  signIn: (form: signInForm) => dispatch(vendorSignIn(form))
});

const VendorSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default VendorSignIn;
