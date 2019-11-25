import * as React from "react";
import { Button } from "react-bootstrap";
import "../css/Style.css";
import {
  addItemToCart,
  removeItemFromCart,
  AddItemToCartAction,
  RemoveItemFromCartAction
} from "../../../Redux/ActionFiles/CustomerActions";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";

interface MenuListProps extends MenuItem, MenuListDispatchProps {}

interface MenuListDispatchProps {
  addToCart: any;
  removeFromCart: any;
}

class MenuItemElement extends React.Component<MenuListProps> {
  handleAdd() {
    const item: MenuItem = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price
    };
    this.props.addToCart(item);
  }

  handleRemove() {
    const item: MenuItem = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price
    };
    this.props.removeFromCart(item);
  }

  render() {
    return (
      <div className="listFood">
        <div>{this.props.name}</div>
        <div>
          {this.props.description}
          <p style={{ textAlign: "right" }}>{this.props.price}</p>
        </div>
        <div className="text-right">
          <Button
            variant="warning"
            style={{ margin: 0.5 }}
            onClick={() => this.handleRemove()}
          >
            -
          </Button>
          <Button
            variant="success"
            style={{ margin: 0.5 }}
            onClick={() => this.handleAdd()}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<AddItemToCartAction | RemoveItemFromCartAction>
): MenuListDispatchProps => ({
  addToCart: (item: MenuItem) => dispatch(addItemToCart(item)),
  removeFromCart: (item: MenuItem) => dispatch(removeItemFromCart(item))
});

export const CustomerMenuItem = connect(
  null,
  mapDispatchToProps
)(MenuItemElement);
