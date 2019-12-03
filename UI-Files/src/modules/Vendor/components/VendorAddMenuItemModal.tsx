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
  id?: number;
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

  checkFields(): boolean {
    var name = this.state.nameField.current.value;
    var description = this.state.descriptionField.current.value;
    var price = Number(this.state.priceField.current.value);

    if (name === "" || description === "" || price === -1) {
      return false;
    } else {
      return true;
    }
  }

  handleAdd() {
    if (!this.checkFields()) {
      alert("Please properly fill out all form fields!");
      return false;
    }
    if (this.props.id) {
      const item: MenuItem = {
        id: this.props.id,
        name: this.state.nameField.current.value,
        description: this.state.descriptionField.current.value,
        price: Number(this.state.priceField.current.value)
      };
      this.props.addMenuItem(item);
      this.props.closeModal();
    } else console.log("No vendor ID given to add item");
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
              <Col sm="10">
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
              <Col sm="10">
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
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter the Price"
                  ref={this.state.priceField}
                  defaultValue={-1}
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
  id: state.vendor.profile.id,
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
