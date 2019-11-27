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

interface CartItemProps {
  cartItem?: OrderItem;
}

export default class CustomerConfirmationCartItem extends React.Component<
  CartItemProps
> {
  render() {
    return (
      <div className="listFood">
        <div>{this.props.cartItem && this.props.cartItem.name}</div>
        <div>
          {this.props.cartItem && this.props.cartItem.description}
          <p style={{ textAlign: "right" }}>
            {this.props.cartItem && this.props.cartItem.price}
          </p>
        </div>
        <div>{this.props.cartItem && this.props.cartItem.quantity}</div>
      </div>
    );
  }
}
