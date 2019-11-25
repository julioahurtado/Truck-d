import * as React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "../css/Style.css";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";

interface VendorAddMenuItemModalPropValues {
  show: boolean;
}

interface VendorAddMenuItemModalActions {
  handleHide: any;
}

interface VendorAddMenuItemModalProps
  extends VendorAddMenuItemModalPropValues,
    VendorAddMenuItemModalActions {}

export class VendorAddMenuItemModal extends React.Component<
  VendorAddMenuItemModalProps
> {
  handleSave() {}

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.handleHide()}>
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
                <Form.Control
                  type="password"
                  placeholder="Enter a description about the menu item"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="2">
                <Form.Control type="password" placeholder="Enter the Price" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.handleHide()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
