import * as React from "react";
import CustomerCart from "../components/CustomerCart";
import CustomerDetails from "../components/CustomerDetails";
import { CheckoutState } from "../../../Redux/ReducerFiles/CustomerReducers/CheckoutReducer";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

interface CustomerCheckoutProps extends CheckoutState {}

class Checkout extends React.Component<CustomerCheckoutProps> {
  showAlert() {
    window.scrollTo(0, 0);
    return (
      <Alert variant="success">
        <Alert.Heading>Order Successfully Placed!</Alert.Heading>
        <p> Order Number: {this.props.orderNumber} </p>
      </Alert>
    );
  }

  render() {
    return (
      <div>
        {!this.props.isLoading &&
          this.props.orderNumber != -1 &&
          this.showAlert()}
        <CustomerDetails></CustomerDetails>
        <CustomerCart></CustomerCart>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerCheckoutProps => ({
  customer: state.customer.checkout.customer,
  orderNumber: state.customer.checkout.orderNumber,
  isLoading: state.customer.checkout.isLoading,
  error: state.customer.checkout.error
});

const CustomerCheckout = connect(mapStateToProps)(Checkout);

export default CustomerCheckout;
