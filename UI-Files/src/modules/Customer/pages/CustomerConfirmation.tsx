import * as React from "react";
import CustomerConfirmationCart from "../components/CustomerConfirmationCart";
import CustomerConfirmationDetails from "../components/CustomerConfirmationDetails";
import { CheckoutState } from "../../../Redux/ReducerFiles/CustomerReducers/CheckoutReducer";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";

interface CustomerConfirmationProps extends CheckoutState {}

export class CustomerConfirmation extends React.Component<
  CustomerConfirmationProps
> {
  render() {
    return (
      <div>
        <CustomerConfirmationDetails></CustomerConfirmationDetails>
        <CustomerConfirmationCart></CustomerConfirmationCart>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerConfirmationProps => ({
  customer: state.customer.checkout.customer,
  orderNumber: state.customer.checkout.orderNumber,
  isLoading: state.customer.checkout.isLoading,
  error: state.customer.checkout.error
});

const CustomerCheckout = connect(mapStateToProps)(CustomerConfirmation);

export default CustomerConfirmation;
