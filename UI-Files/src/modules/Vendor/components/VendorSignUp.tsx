import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'

import { vendorSignUp, LoginThunkDispatch } from '../../../Redux/ActionFiles/VendorActions';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';

// TODO: add type for dispatch function
interface VendorSignUpProps {
    isLoading?: Boolean
    signUp?: any
}

 interface VendorSignUpState {
    emailField: any;
    passwordField: any; 
    passwordConfirmField: any; 
    restaurantField: any;
    cuisineField: any; 
    locationField: any; 
 }


export class SignUp extends React.Component<VendorSignUpProps, VendorSignUpState> {

    constructor(props: VendorSignUpProps){
        super(props);
        this.state = {
            emailField: React.createRef(),
            passwordField: React.createRef(),
            passwordConfirmField: React.createRef(),
            restaurantField: React.createRef(),
            cuisineField: React.createRef(),
            locationField: React.createRef() 
        }
    }

    // Initiates user sign-up on form submission
    handleSubmit(): Boolean {
        const email: String = this.state.emailField.current.value;
        const pass: String = this.state.passwordField.current.value;
        const restaurant: String = this.state.restaurantField.current.value;
        const cuisine: String = this.state.cuisineField.current.value;
        const location: String = this.state.locationField.current.value;

        // Make sure password and confirmation fields match
        if (pass !== this.state.passwordConfirmField.current.value) {
            console.log("Passwords do not match")
            return false
        }

        this.props.signUp(email,pass,restaurant,cuisine,location)
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
                        <Form.Group controlId='formConfirmPassword'>
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control ref={this.state.passwordConfirmField} type="password">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formRestaurantName'>
                            <Form.Label>
                                Restaurant Name
                            </Form.Label>
                            <Form.Control ref={this.state.restaurantField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formCuisineType'>
                            <Form.Label>
                                Cuisine type
                            </Form.Label>
                            <Form.Control ref={this.state.cuisineField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formCity'>
                            <Form.Label>
                                City
                            </Form.Label>
                            <Form.Control ref={this.state.locationField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={() => this.handleSubmit()}>Create Account</Button>
                    </Form>
                </Container>
        )
    }
}

const mapStateToProps = (state: RootState): VendorSignUpProps => ({
    isLoading: state.vendor.login.isLoading
});

const mapDispatchToProps = (dispatch: LoginThunkDispatch): VendorSignUpProps => ({
    signUp: (email:String,pass:String,restaurant:String,cuisine:String,location:String) =>
        dispatch(vendorSignUp(email, pass, restaurant, cuisine, location))
});

const VendorSignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default VendorSignUp;