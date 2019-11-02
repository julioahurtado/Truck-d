import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'

import { vendorSignIn, LoginThunkDispatch } from '../../../Redux/ActionFiles/VendorActions';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';

 interface VendorSignInState {
    emailField: React.RefObject<any>; 
    passwordField: React.RefObject<any>; 
 }


export class SignIn extends React.Component<any, VendorSignInState> {

    constructor(props: any){
        super(props);
        this.state = {
            emailField: React.createRef(),
            passwordField: React.createRef()
        }
    }

    // Initiates user sign-in on form submission
    handleSubmit(): Boolean {
        const email: String = this.state.emailField.current.value;
        const pass: String = this.state.passwordField.current.value
        this.props.signIn(email, pass);

        return true;
    }

    render(){
        return (
                <Container>
                    <Form onClick={() => this.handleSubmit()}>
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
                        <Button variant="primary" type="button">Sign In</Button>
                    </Form>
                </Container>
        )
    }
}

// TODO: Add interface for state props
const mapStateToProps = (state: RootState) => ({
    isLoading: state.vendor.login.isLoading
});

// TODO: Add interface for dispatch props
const mapDispatchToProps = (dispatch: LoginThunkDispatch) => ({
    signIn: (email: String, pass: String) => 
        dispatch(vendorSignIn(email, pass))
});

const VendorSignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

export default VendorSignIn;