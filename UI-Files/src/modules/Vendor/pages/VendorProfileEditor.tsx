
import * as React from 'react'
import { Row, Col, Form, Button, ListGroup, Modal } from 'react-bootstrap'
import { ExecFileOptionsWithStringEncoding } from 'child_process';

interface VendorProfileEditorProps{
    vendorName: String;
    vendorDescription: String;
    vendorPhoneNumber: String;
    vendorCity: String;
    vendorState: String;
    vendorCuisine: String;

}
 

export default class VendorProfileEditor extends React.Component<VendorProfileEditorProps> {
    render(){
        function AddMenuItem() {
            
            const [show, setShow] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            return (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Add Menu Item
                  </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Menu Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="form">
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Name
                                    </Form.Label>
                                    <Col sm="2">
                                        <Form.Control type="text" placeholder="Enter your Name" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Description
                                    </Form.Label>
                                    <Col sm="2">
                                        <Form.Control type="text" placeholder="Enter a description about the menu item" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Price</Form.Label>
                                    <Col sm="2">
                                        <Form.Control type="text" placeholder="Enter the Price" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                      </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                      </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
        return (
            <div className="formContainer">
                <Row>
                    <Col>
                        <Form className="form">
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Name
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Enter your Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Description
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Tell us about your business" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Phone
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="(xxx) xxx-xxxx" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    City
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Enter your City" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    State
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Enter your State" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Address
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Enter your Address" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Cuisine
                        </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Enter the Cuisine" />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div className="savebutton">
                            <Button variant="primary">Save</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="menuName"><h1>Menu</h1></div>
                        <ListGroup>
                            <p>"Burrito"</p>
                            <p>"Hamburger"</p>
                            <p>"Taco"</p>
                            <p>"Hotdogs"</p>
                            <p>"Pasta"</p>
                        </ListGroup>
                        <div className="addMenuItem"><AddMenuItem /> </div>
                    </Col>
                </Row>
            </div>
        )
    }
}