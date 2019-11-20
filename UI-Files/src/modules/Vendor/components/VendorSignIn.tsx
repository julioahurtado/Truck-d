import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'

import { vendorSignIn, signInForm, LoginThunkDispatch } from '../../../Redux/ActionFiles/VendorActions';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';

interface VendorSignInProps {
    isLoading?: Boolean
    signIn?: any
}

 interface VendorSignInState {
    emailField: React.RefObject<any>; 
    passwordField: React.RefObject<any>; 
 }


export class SignIn extends React.Component<VendorSignInProps, VendorSignInState> {

    constructor(props: VendorSignInProps){
        super(props);
        this.state = {
            emailField: React.createRef(),
            passwordField: React.createRef()
        }
    }

    // Initiates user sign-in on form submission
    handleSubmit(): Boolean {
        const form: signInForm = {
            email: this.state.emailField.current.value,
            password: this.state.passwordField.current.value
        }

        this.props.signIn(form);
        return true;
    }

    render(){
        return (
                <Container>
                    <Form>
                        <Form.Group controlId='formEmail'>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="text" ref={this.state.emailField} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formPassword'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control ref={this.state.passwordField} type="password">
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={() => this.handleSubmit()}>Sign In</Button>
                    </Form>
                </Container>
        )
    }
}

const mapStateToProps = (state: RootState): VendorSignInProps => ({
    isLoading: state.vendor.login.isLoading
});

const mapDispatchToProps = (dispatch: LoginThunkDispatch): VendorSignInProps => ({
    signIn: (form: signInForm) => 
        dispatch(vendorSignIn(form))
});

const VendorSignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

export default VendorSignIn;