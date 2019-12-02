import * as React from "react";
import { Button } from "react-bootstrap";
import "../css/Style.css";
import {
  vendorDeleteMenuItem,
  openEditModal
} from "../../../Redux/ActionFiles/VendorActions";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";

interface VendorMenuItemProps extends VendorMenuItemDispatchProps {
  item: MenuItem;
}

interface VendorMenuItemDispatchProps {
  openEditModal: any;
  deleteMenuItem: any;
}

export class MenuItemElement extends React.Component<VendorMenuItemProps> {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.item.name}</td>
          <td>{this.props.item.description}</td>
          <td>${this.props.item.price}</td>
        </tr>
        <td>
          <Button
            variant="primary"
            style={{ margin: 1 }}
            onClick={() => this.props.openEditModal(this.props.item.id)}
          >
            Edit
          </Button>
        </td>
        <td></td>
        <td>
          <Button
            variant="primary"
            style={{ margin: 1 }}
            onClick={() => this.props.deleteMenuItem(this.props.item)}
          >
            Remove
          </Button>
        </td>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any): VendorMenuItemDispatchProps => ({
  openEditModal: (id: number) => dispatch(openEditModal(id)),
  deleteMenuItem: (item: MenuItem) => dispatch(vendorDeleteMenuItem(item))
});

const VendorMenuItem = connect(null, mapDispatchToProps)(MenuItemElement);

export default VendorMenuItem;
