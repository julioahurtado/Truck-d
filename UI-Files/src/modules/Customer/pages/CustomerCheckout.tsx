import * as React from "react";
import CustomerCart from "../components/CustomerCart";
import CustomerDetails from "../components/CustomerDetails";
import { CheckoutState } from "../../../Redux/ReducerFiles/CustomerReducers/CheckoutReducer";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

interface CustomerCheckoutProps extends CheckoutState {}

class Checkout extends React.Component<CustomerCheckoutProps> {
  render() {
    return (
      <div>
        <CustomerDetails></CustomerDetails>

        <CustomerCart></CustomerCart>
        <Link to={"/customer/confirm"}>
          <Button>Confirmation</Button>
        </Link>
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
