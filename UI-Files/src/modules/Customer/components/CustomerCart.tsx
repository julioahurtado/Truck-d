import * as React from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { CustomerCartItem } from "./CustomerCartItem";
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

interface CustomerCartProps extends CartState, CustomerCartDispatchProps {
  id?: number;
  customer?: CustomerInfo;
}

interface CustomerCartDispatchProps {
  sendOrder?: any;
}

class Cart extends React.Component<CustomerCartProps> {
  handleCheckout() {
    if (!this.props.customer) console.log("Fill in customer information");
    else if (!this.props.items || !this.props.price || !this.props.id)
      console.log("Cart is empty!");
    else {
      console.log("checking out");
      const order: Order = {
        id: this.props.id,
        customer: this.props.customer,
        items: this.props.items,
        price: this.props.price
      };
      this.props.sendOrder(order);
    }
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <br />
        <ListGroup style={{ padding: "2px" }}>
          {this.props.items &&
            this.props.items.map((item: OrderItem) => {
              return <CustomerCartItem cartItem={item}></CustomerCartItem>;
            })}
        </ListGroup>

        <div className="centered">
          <Row>
            <Col xs={6}>
              <Link to="/customer/menu/:vendorName'">
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
            <Col xs={6}>
              <Link to="/customer">
                <Button
                  variant="warning"
                  style={{
                    position: "relative",
                    bottom: "-20px",
                    margin: 5,
                    right: "-20px"
                  }}
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
            </Col>
            <Col xs={6}>
              <Button
                variant="warning"
                onClick={() => this.handleCheckout()}
                style={{
                  position: "relative",
                  bottom: "-20px",
                  margin: 5,
                  right: "-20px"
                }}
                type="button"
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerCartProps => ({
  items: state.customer.cart.items,
  price: state.customer.cart.price,
  id: state.customer.vendor.id,
  customer: state.customer.checkout.customer
});

const mapDispatchtoProps = (dispatch: any): CustomerCartDispatchProps => ({
  sendOrder: (order: Order) => dispatch(sendOrder(order))
});

const CustomerCart = connect(mapStateToProps, mapDispatchtoProps)(Cart);

export default CustomerCart;
