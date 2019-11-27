import * as React from "react";

import "./CustomerVendorSearch";
import "./CustomerVendorListItem";
import { Form } from "react-bootstrap";
import {
  updateCustomerName,
  updateCustomerEmail,
  updateCustomerPhone
} from "../../../Redux/ActionFiles/CustomerActions";
import { connect } from "react-redux";

interface CustomerDetailsDispatchProps {
  name: any;
  email: any;
  phone: any;
}

class CustomerConfirmationDetails extends React.Component<
  CustomerDetailsDispatchProps
> {
  render() {
    return (
      <Form>
        <h1>Details</h1>
        <div className="centered">
          <div style={{ margin: 10 }}>
            <Form.Group controlId="formName">
              Name:
              <Form.Control
                style={{ width: 400 }}
                disabled
                type="text"
                defaultValue={"name"}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formEmail">
              Email:
              <Form.Control
                style={{ width: 400 }}
                disabled
                type="text"
                defaultValue={"email"}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPhone">
              Phone:
              <Form.Control
                style={{ width: 400 }}
                disabled
                type="text"
                defaultValue={"phone"}
              ></Form.Control>
            </Form.Group>
          </div>
        </div>
      </Form>
    );
  }
}

//mapStatetoProps

const CustomerDetails = connect(null)(CustomerConfirmationDetails);

export default CustomerDetails;
