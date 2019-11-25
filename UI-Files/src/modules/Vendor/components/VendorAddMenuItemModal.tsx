import * as React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "../css/Style.css";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import {
  vendorAddMenuItem,
  closeAddModal
} from "../../../Redux/ActionFiles/VendorActions";

interface VendorAddMenuItemModalProps
  extends VendorAddMenuItemModalDispatchProps {
  show?: boolean;
}

interface VendorAddMenuItemModalDispatchProps {
  addMenuItem?: any;
  closeModal?: any;
}

interface VendorAddMenuItemModalState {
  nameField: any;
  descriptionField: any;
  priceField: any;
}

class AddMenuItemModal extends React.Component<
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

  handleAdd() {
    const item: MenuItem = {
      id: -1,
      name: this.state.nameField.current.value,
      description: this.state.descriptionField.current.value,
      price: this.state.priceField.current.value
    };
    this.props.addMenuItem(item);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.closeModal()}>
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
                  type="password"
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
                  type="password"
                  placeholder="Enter the Price"
                  ref={this.state.priceField}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.closeModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state: RootState): VendorAddMenuItemModalProps => ({
  show: state.vendor.profile.showAddModal
});

const mapDispatchToProps = (
  dispatch: any
): VendorAddMenuItemModalDispatchProps => ({
  addMenuItem: (item: MenuItem) => dispatch(vendorAddMenuItem(item)),
  closeModal: () => dispatch(closeAddModal())
});

const VendorAddMenuItemModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMenuItemModal);

export default VendorAddMenuItemModal;
