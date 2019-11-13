import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'

import { vendorSignUp, signUpForm, LoginThunkDispatch } from '../../../Redux/ActionFiles/VendorActions';
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
    descriptionField: any; 
    phoneNumberField: any; 
    addressField: any; 
    cityField: any; 
    stateField: any; 
    beginHoursField: any; 
    endHoursField: any; 
 }

// TODO: Add description and phone inputs to form
export class SignUp extends React.Component<VendorSignUpProps, VendorSignUpState> {

    constructor(props: VendorSignUpProps){
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
        }
    }

    translateTime(timeStr: String): Number {
        let hours = parseInt(timeStr.substring(0,2)) * 100;
        let mins = parseInt(timeStr.substring(3))
        let time = (hours + mins);
        return time;
    }

    // Initiates user sign-up on form submission
    handleSubmit(): Boolean {
        const form: signUpForm = {
            email: this.state.emailField.current.value,
            password: this.state.passwordField.current.value,
            name: this.state.restaurantField.current.value,
            description: "",
            cuisine: this.state.cuisineField.current.value,
            phone: "",
            address: this.state.addressField.current.value,
            city: this.state.cityField.current.value,
            state: this.state.stateField.current.value,
            open: this.state.beginHoursField.current.value,
            close: this.state.endHoursField.current.value,
        }
        
        
        // Make sure password and confirmation fields match
        if (form.password !== this.state.passwordConfirmField.current.value) {
            console.log("Passwords do not match")
            return false
        }

        // this.props.signUp(form)
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
                        <Form.Group controlId='formDescription' >
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control ref={this.state.descriptionField} type="textarea">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBeginHours'>
                            <Form.Label>
                                Hours
                            </Form.Label>
                            <div style={{display: 'flex'}}>
                                <Form.Label>
                                    Opening
                                </Form.Label>
                                <Form.Control ref={this.state.beginHoursField} type="time">
                                </Form.Control> 
                            </div>
                            <div style={{display: 'flex'}}>
                                <Form.Label>
                                    Closing
                                </Form.Label>
                                <Form.Control ref={this.state.endHoursField} type="time">
                                </Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='formAddress'>
                            <Form.Label>
                                Address
                            </Form.Label>
                            <Form.Control ref={this.state.addressField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formCity'>
                            <Form.Label>
                                City
                            </Form.Label>
                            <Form.Control ref={this.state.cityField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formStatey'>
                            <Form.Label>
                                State
                            </Form.Label>
                            <Form.Control ref={this.state.stateField} type="text">
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
    signUp: (form: signUpForm) =>
        dispatch(vendorSignUp(form))
});

const VendorSignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default VendorSignUp;