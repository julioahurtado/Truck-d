import * as React from "react";

import "../components/CustomerVendorSearch";
import "../components/CustomerVendorListItem";
import { Form } from "react-bootstrap";
import {
  updateCustomerName,
  updateCustomerEmail,
  updateCustomerPhone
} from "../../../Redux/ActionFiles/CustomerActions";
import { connect } from "react-redux";

interface CustomerDetailsDispatchProps {
  updateName: any;
  updateEmail: any;
  updatePhone: any;
}

interface CustomerDetailState {
  customerName: any;
  customerEmail: any;
  customerPhone: any;
}

class Details extends React.Component<
  CustomerDetailsDispatchProps,
  CustomerDetailState
> {
  constructor(props: CustomerDetailsDispatchProps) {
    super(props);
    this.state = {
      customerName: React.createRef(),
      customerEmail: React.createRef(),
      customerPhone: React.createRef()
    };
  }

  handleNameChange() {
    this.props.updateName(this.state.customerName.current.value);
  }

  handleEmailChange() {
    this.props.updateEmail(this.state.customerEmail.current.value);
  }

  handlePhoneChange() {
    this.props.updatePhone(this.state.customerPhone.current.value);
  }

  render() {
    return (
      <Form>
        <h1>Details</h1>
        <div className="centered">
          <div style={{ margin: 10 }}>
            <Form.Group controlId="formName">
              Name:
              <Form.Control
                onChange={() => this.handleNameChange()}
                style={{ width: 400 }}
                ref={this.state.customerName}
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formEmail">
              Email:
              <Form.Control
                onChange={() => this.handleEmailChange()}
                style={{ width: 400 }}
                ref={this.state.customerEmail}
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPhone">
              Phone:
              <Form.Control
                onChange={() => this.handlePhoneChange()}
                style={{ width: 400 }}
                ref={this.state.customerPhone}
                type="text"
              ></Form.Control>
            </Form.Group>
          </div>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch: any): CustomerDetailsDispatchProps => ({
  updateName: (name: string) => dispatch(updateCustomerName(name)),
  updateEmail: (email: string) => dispatch(updateCustomerEmail(email)),
  updatePhone: (phone: string) => dispatch(updateCustomerPhone(phone))
});

const CustomerDetails = connect(null, mapDispatchToProps)(Details);

export default CustomerDetails;
