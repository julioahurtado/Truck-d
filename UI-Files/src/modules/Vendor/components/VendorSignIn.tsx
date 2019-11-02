import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'


 interface VendorSignInState {
    emailField:     any; 
    passwordField:     any; 
 }


export default class VendorSignIn extends React.Component<any,VendorSignInState> {

    constructor(props: any){
        super(props);
        this.state = {
            emailField: React.createRef(),
            passwordField: React.createRef()
        }
    }

    handleSubmit() {
        console.log(this.state.emailField.current.value);
        console.log(this.state.passwordField.current.value);
        console.log(this.state.passwordField.current.value);
        
        return true;
    }

    render(){
        return (
                <Container>
                    <Form onSubmit={() => this.handleSubmit()}>
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
                        <Button variant="primary" type="submit">Sign In</Button>
                    </Form>
                </Container>
        )
    }
}