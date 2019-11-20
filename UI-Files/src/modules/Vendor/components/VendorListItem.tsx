import * as React from 'react'
import '../css/Style.css'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'



interface VendorListItemProps {
    menuItem: string;
}


export default class VendorListItem extends React.Component<VendorListItemProps> {

    constructor(props: any) {
        super(props);
    }


    render() {
        function EditItem(test) {
            const [show, setShow] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            return (
                <>
                    <Button onClick={handleShow}>{test}
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
                                        <Form.Control type="password" placeholder="Enter your Name" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Description
                                    </Form.Label>
                                    <Col sm="2">
                                        <Form.Control type="password" placeholder="Enter a description about the menu item" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Price</Form.Label>
                                    <Col sm="2">
                                        <Form.Control type="password" placeholder="Enter the Price" />
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
            <div style={{ background: '#FFFFFF', borderWidth: '2px', borderColor: 'black', borderStyle: "solid", padding: '2px', margin: '2px', }}>
                <p className="paragraph">
                    <EditItem test="test"/>{this.props.menuItem}<EditItem />
                </p>
            </div>
        )
    }
}