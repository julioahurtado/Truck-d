import * as React from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import CustomerConfirmationCartItem from "./CustomerConfirmationCartItem";
import { Link } from "react-router-dom";
import {
  OrderItem,
  CustomerInfo,
  Order
} from "../../../Redux/InterfaceFiles/types";
import { CartState } from "../../../Redux/ReducerFiles/CustomerReducers/CartReducer";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { sendOrder } from "../../../Redux/ActionFiles/CustomerActions";

interface CustomerConfirmationCartProps extends CartState {
  id?: number;
  customer?: CustomerInfo;
}

class CustomerConfirmationCart extends React.Component<
  CustomerConfirmationCartProps
> {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <br />
        <ListGroup style={{ padding: "2px" }}>
          {this.props.items &&
            this.props.items.map((item: OrderItem) => {
              return (
                <CustomerConfirmationCartItem
                  cartItem={item}
                ></CustomerConfirmationCartItem>
              );
            })}
        </ListGroup>
        <p>Price: {this.props.price && this.props.price.toFixed(2)}</p>

        <div className="centered">
          <Row>
            <Col xs={6}>
              <Link to="/customer">
                <Button
                  style={{
                    position: "relative",
                    bottom: "-20px",
                    margin: 5,
                    left: "-20px"
                  }}
                  variant="secondary"
                  type="button"
                >
                  Return
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerConfirmationCartProps => ({
  items: state.customer.cart.items,
  price: state.customer.cart.price,
  id: state.customer.vendor.id,
  customer: state.customer.checkout.customer
});

const CustomerCart = connect(mapStateToProps)(CustomerConfirmationCart);

export default CustomerConfirmationCart;
