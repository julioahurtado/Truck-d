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
        <h1 className="label">Cart</h1>
        <br />
        <ListGroup style={{ padding: "20px" }}>
          {this.props.items &&
            this.props.items.map((item: OrderItem) => {
              return <CustomerCartItem cartItem={item}></CustomerCartItem>;
            })}
        </ListGroup>
        <p
          style={{ textAlign: "center", fontSize: "35px", marginBottom: "5%" }}
        >
          Subtotal: {"$" + (this.props.price && this.props.price.toFixed(2))}
        </p>
        <div className="centered" style={{ marginBottom: "5%" }}>
          <Row>
            <Col xs={3}>
              <Link to="/customer/menu/">
                <Button
                  variant="secondary"
                  type="button"
                  style={{ padding: "12px", fontSize: "18px" }}
                >
                  Return
                </Button>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/customer">
                <Button
                  variant="danger"
                  type="button"
                  style={{ padding: "12px", fontSize: "18px" }}
                >
                  Cancel
                </Button>
              </Link>
            </Col>
            <Col xs={6}>
              <Button
                variant="warning"
                onClick={() => this.handleCheckout()}
                type="button"
                style={{ padding: "12px", fontSize: "18px" }}
              >
                Send Order
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
