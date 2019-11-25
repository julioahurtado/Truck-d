import * as React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "../css/Style.css";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";

interface VendorAddMenuItemModalPropValues {
  show?: boolean;
}

interface VendorAddMenuItemModalActions {
  handleHide?: any;
}

interface VendorAddMenuItemModalState {
  nameField: any;
  descriptionField: any;
  priceField: any;
}

interface VendorAddMenuItemModalProps
  extends VendorAddMenuItemModalPropValues,
    VendorAddMenuItemModalActions {}

export default class VendorAddMenuItemModal extends React.Component<
  VendorAddMenuItemModalProps,
  VendorAddMenuItemModalState
> {
  constructor(props: VendorAddMenuItemModalProps) {
    super(props);
    this.state = {
      nameField: React.createRef(),
      descriptionField: React.createRef(),
      priceField: React.createRef()
    };
  }

  handleSave() {}

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.handleHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form">
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="2">
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  ref={this.state.nameField}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDescription">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="2">
                <Form.Control
                  type="text"
                  placeholder="Enter a description about the menu item"
                  ref={this.state.descriptionField}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPrice">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="2">
                <Form.Control
                  type="number"
                  placeholder="Enter the Price"
                  ref={this.state.priceField}
                />
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
