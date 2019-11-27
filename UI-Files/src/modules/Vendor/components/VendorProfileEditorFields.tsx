import * as React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { RootState } from "../../../Redux/StoreFiles/store";
import { vendorUpdateProfile } from "../../../Redux/ActionFiles/VendorActions";
import { VendorInfo, VendorHours } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";

interface VendorProfileEditorFieldsProps
  extends VendorProfileEditorFieldsDispatchProps {
  id?: number;
  name?: string;
  description?: string;
  cuisine?: string;
  hours?: VendorHours;
  phone?: number;
  city?: string;
  state?: string;
  address?: string;
}

interface VendorProfileEditorFieldsDispatchProps {
  updateProfile?: any;
}

interface VendorProfileEditorFieldsState {
  nameField: any;
  descriptionField: any;
  cuisineField: any;
  beginHoursField: any;
  endHoursField: any;
  phoneField: any;
  cityField: any;
  stateField: any;
  AddressField: any;
}

class ProfileEditorFields extends React.Component<
  VendorProfileEditorFieldsProps,
  VendorProfileEditorFieldsState
> {
  constructor(props: any) {
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
    };
  }

  handleSubmit() {
    if (this.props.id) {
      const vendor: VendorInfo = {
        id: this.props.id,
        name: this.state.nameField.current.value,
        description: this.state.descriptionField.current.value,
        cuisine: this.state.cuisineField.current.value,
        hours: {
          open: this.state.beginHoursField.current.value,
          close: this.state.endHoursField.current.value
        },
        phone: this.state.phoneField.current.value,
        city: this.state.cityField.current.value,
        state: this.state.stateField.current.value,
        address: this.state.AddressField.current.value,
        menu: []
      };
      this.props.updateProfile(vendor);
    } else console.log("You must sign in before using the profile editor");
  }

  StringtoNumberTime(timeStr: string): number {
    let hours = parseInt(timeStr.substring(0, 2)) * 100;
    let mins = parseInt(timeStr.substring(3));
    let time = hours + mins;
    return time;
  }

  NumbertoStringTime(timeNum: number): string {
    let time = timeNum.toString();

    if (timeNum < 1000) {
      time = "0" + time;
    }
    return time;
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              ref={this.state.nameField}
              defaultValue={this.props.name}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={this.state.descriptionField}
              type="text"
              defaultValue={this.props.description}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Cuisine</Form.Label>
            <Form.Control
              ref={this.state.cuisineField}
              type="text"
              defaultValue={this.props.cuisine}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBeginHours">
            <Form.Label>Hours</Form.Label>
            <div style={{ display: "flex" }}>
              <Form.Label>Opening</Form.Label>
              <Form.Control
                ref={this.state.beginHoursField}
                type="time"
                defaultValue={this.props.hours && this.NumbertoStringTime(this.props.hours.open)}
              ></Form.Control>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Label>Closing</Form.Label>
              <Form.Control
                ref={this.state.endHoursField}
                type="time"
                defaultValue={this.props.hours && this.NumbertoStringTime(this.props.hours.close)}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              ref={this.state.phoneField}
              type="text"
              defaultValue={this.props.phone}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              ref={this.state.cityField}
              type="text"
              defaultValue={this.props.city}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              ref={this.state.stateField}
              defaultValue={this.props.state}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              ref={this.state.AddressField}
              type="text"
              defaultValue={this.props.address}
            ></Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.handleSubmit()}
          >
            Update Profile
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState): VendorProfileEditorFieldsProps => ({
  id: state.vendor.profile.id,
  name: state.vendor.profile.name,
  description: state.vendor.profile.description,
  cuisine: state.vendor.profile.cuisine,
  hours: state.vendor.profile.hours,
  phone: state.vendor.profile.phone,
  city: state.vendor.profile.city,
  state: state.vendor.profile.state,
  address: state.vendor.profile.address
});

const mapDispatchToProps = (
  dispatch: any
): VendorProfileEditorFieldsDispatchProps => ({
  updateProfile: (vendor: VendorInfo) => dispatch(vendorUpdateProfile(vendor))
});

const VendorProfileEditorFields = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditorFields);

export default VendorProfileEditorFields;
