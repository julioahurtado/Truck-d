
import * as React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
 

interface VendorProfileEditorFieldsState {
    nameField:     any;
    descriptionField:  any; 
    cuisineField:  any; 
    beginHoursField:  any; 
    endHoursField:  any; 
    phoneField:  any; 
    cityField:  any; 
    stateField:  any; 
    AddressField:  any; 
}


interface VendorProfileEditorFieldsPropValues {
    name:     String;
    description:  String; 
    cuisine:  String; 
    hours:  any; 
    phone:  String; 
    city:  String; 
    state:  String; 
    Address:  String; 
 }

 interface VendorProfileEditorFieldsActions {

 }

 interface VendorProfileEditorFieldsProps extends VendorProfileEditorFieldsPropValues, VendorProfileEditorFieldsActions {};

export default class VendorProfileEditorFields extends React.Component<VendorProfileEditorFieldsProps,VendorProfileEditorFieldsState> {

    constructor(props: any){
        super(props);
        this.state = {
            nameField: React.createRef(),
            descriptionField: React.createRef(),
            cuisineField: React.createRef(),
            beginHoursField: React.createRef(),
            endHoursField: React.createRef(),
            phoneField: React.createRef(),
            cityField: React.createRef(),
            stateField: React.createRef(),
            AddressField: React.createRef()
        }
    }


    handleSubmit(){
        
    }

    translateTime(timeStr: String): Number {
        let hours = parseInt(timeStr.substring(0,2)) * 100;
        let mins = parseInt(timeStr.substring(3))
        let time = (hours + mins);
        return time;
    }


    render(){
        return (
            <Container>
                    <Form onSubmit={() => this.handleSubmit()}>
                        <Form.Group controlId='formName'>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text" ref={this.state.nameField} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formDescription'>
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control ref={this.state.descriptionField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formDescription'>
                            <Form.Label>
                                Cuisine
                            </Form.Label>
                            <Form.Control ref={this.state.cuisineField} type="text">
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
                        <Form.Group controlId='formPhone'>
                            <Form.Label>
                                Phone
                            </Form.Label>
                            <Form.Control ref={this.state.phoneField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formCity'>
                            <Form.Label>
                                City
                            </Form.Label>
                            <Form.Control ref={this.state.cityField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formState'>
                            <Form.Label>
                                State
                            </Form.Label>
                            <Form.Control type="text" ref={this.state.stateField} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formAddress'>
                            <Form.Label>
                                Address
                            </Form.Label>
                            <Form.Control ref={this.state.AddressField} type="text">
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Create Account</Button>
                    </Form>
                </Container>
        )
    }
}