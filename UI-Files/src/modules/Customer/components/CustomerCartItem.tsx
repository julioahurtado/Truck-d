import * as React from "react";
import { Button } from "react-bootstrap";
import "../css/Style.css";
import {
  addItemToCart,
  removeItemFromCart,
  removeItemTypeFromCart
} from "../../../Redux/ActionFiles/CustomerActions";
import { CartActions } from "../../../Redux/ReducerFiles/CustomerReducers/CartReducer";
import { MenuItem, OrderItem } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface CartItemProps extends CartItemDispatchProps {
  cartItem?: OrderItem;
}

interface CartItemDispatchProps {
  addToCart: any;
  removeFromCart: any;
  removeTypeFromCart: any;
}

class CartItem extends React.Component<CartItemProps> {
  handleAdd() {
    this.forceUpdate();
    this.props.addToCart(this.props.cartItem);
  }

  handleRemove() {
    this.props.removeFromCart(this.props.cartItem);
  }

  handleRemoveType() {
    this.props.removeTypeFromCart(this.props.cartItem);
  }

  render() {
    return (
      <div className="cart">
        <div>{this.props.cartItem && this.props.cartItem.name}</div>
        <div>
          {this.props.cartItem && this.props.cartItem.description}
          <p style={{ textAlign: "right" }}>
            {"$" + (this.props.cartItem && this.props.cartItem.price)}
          </p>
        </div>
        <div>
          {"Qty: " + (this.props.cartItem && this.props.cartItem.quantity)}
        </div>
        <div className="text-right">
          <Button
            className="butn"
            variant="warning"
            style={{ margin: 0.5 }}
            onClick={() => this.handleRemove()}
          >
            -
          </Button>
          <Button
            className="butn"
            variant="success"
            style={{ margin: 0.5 }}
            onClick={() => this.handleAdd()}
          >
            +
          </Button>
          <Button
            className="butn"
            variant="danger"
            style={{ margin: 0.5 }}
            onClick={() => this.handleRemoveType()}
          >
            x
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<CartActions>
): CartItemDispatchProps => ({
  addToCart: (item: MenuItem) => dispatch(addItemToCart(item)),
  removeFromCart: (item: MenuItem) => dispatch(removeItemFromCart(item)),
  removeTypeFromCart: (item: MenuItem) => dispatch(removeItemTypeFromCart(item))
});

export const CustomerCartItem = connect(null, mapDispatchToProps)(CartItem);
