import * as React from "react";
import { Button } from "react-bootstrap";
import "../css/Style.css";
import {
  vendorDeleteMenuItem,
  openEditModal,
  OpenModalAction
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
  handleDelete() {
    this.props.deleteMenuItem(this.props.item);
  }

  render() {
    return (
      <div className="listFood">
        <div>{this.props.item.name}</div>
        <div>
          {this.props.item.description}
          <p style={{ textAlign: "right" }}>{this.props.item.price}</p>
        </div>
        <div className="text-right">
          <Button
            variant="danger"
            style={{ margin: 0.5 }}
            onClick={() => this.props.openEditModal()}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            style={{ margin: 0.5 }}
            onClick={() => this.handleDelete()}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any): VendorMenuItemDispatchProps => ({
  openEditModal: () => dispatch(openEditModal()),
  deleteMenuItem: (item: MenuItem) => dispatch(vendorDeleteMenuItem(item))
});

const VendorMenuItem = connect(null, mapDispatchToProps)(MenuItemElement);

export default VendorMenuItem;
