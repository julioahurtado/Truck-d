import * as React from 'react'
 
import './CustomerVendorSearch'
import './CustomerVendorListItem'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'


interface CustomerDetailProps{
    customerName: any;
    customerEmail: any;
    customerPhone: any;
}


export default class CustomerDetails extends React.Component<any, CustomerDetailProps> {
    
    constructor(props: any){
        super(props);
        this.state = {
            customerName: React.createRef(),
            customerEmail: React.createRef(),
            customerPhone: React.createRef(),
        }
    }

    handleSubmit() {
        console.log(this.state.customerName.current.value);
        console.log(this.state.customerEmail.current.value);
        console.log(this.state.customerPhone.current.value);
        return true;
    }
    
    
    render(){
        return (
           // <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
            <div>
                <h1>Details</h1>
                <div style={{margin: 10}}>
                    <Form.Group controlId='formName'>
                        Name:<Form.Control style={{width: 400}} type="text" ref={this.state.customerName} onChange={() => this.handleSubmit()}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formEmail'>
                        Email:<Form.Control style={{width: 400}} ref={this.state.customerEmail}  onChange={() => this.handleSubmit()} type="text">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formPhone'>
                        Phone:<Form.Control style={{width: 400}} ref={this.state.customerPhone}onChange={() => this.handleSubmit()} type="text">
                        </Form.Control>
                    </Form.Group>
                </div>
           </div>
        )
    }
}
