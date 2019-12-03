import * as React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "../css/Style.css";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { RootState } from "../../../Redux/StoreFiles/store";
import {
  vendorEditMenuItem,
  closeEditModal
} from "../../../Redux/ActionFiles/VendorActions";
import { connect } from "react-redux";

interface VendorEditMenuItemModalProps
  extends VendorEditMenuItemModalDispatchProps {
  id?: number;
  show?: boolean;
}

interface VendorEditMenuItemModalDispatchProps {
  editMenuItem?: any;
  closeModal?: any;
}

interface VendorEditMenuItemModalState {
  nameField: any;
  descriptionField: any;
  priceField: any;
}

class EditMenuItemModal extends React.Component<
  VendorEditMenuItemModalProps,
  VendorEditMenuItemModalState
> {
  constructor(props: VendorEditMenuItemModalProps) {
    super(props);
    this.state = {
      nameField: React.createRef(),
      descriptionField: React.createRef(),
      priceField: React.createRef()
    };
  }

  handleEdit() {
    if (this.props.id) {
      const item: MenuItem = {
        id: this.props.id,
        name: this.state.nameField.current.value,
        description: this.state.descriptionField.current.value,
        price: this.state.priceField.current.value
      };
      this.props.editMenuItem(item);
      this.props.closeModal();
    } else console.log("No menu item ID given to edit item");
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Menu Item</Modal.Title>
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
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.closeModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state: RootState): VendorEditMenuItemModalProps => ({
  id: state.vendor.profile.currItemId,
  show: state.vendor.profile.showEditModal
});

const mapDispatchToProps = (
  dispatch: any
): VendorEditMenuItemModalDispatchProps => ({
  editMenuItem: (item: MenuItem) => dispatch(vendorEditMenuItem(item)),
  closeModal: () => dispatch(closeEditModal())
});

const VendorEditMenuItemModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMenuItemModal);

export default VendorEditMenuItemModal;
