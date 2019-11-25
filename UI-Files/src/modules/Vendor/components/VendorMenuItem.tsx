import * as React from "react";
import { Button } from "react-bootstrap";
import "../css/Style.css";
import {
  vendorDeleteMenuItem,
  vendorEditMenuItem
} from "../../../Redux/ActionFiles/VendorActions";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";

interface VendorMenuItemProps extends VendorMenuItemDispatchProps {
  item: MenuItem;
}

interface VendorMenuItemDispatchProps {
  editMenuItem: any;
  deleteMenuItem: any;
}

export class MenuItemElement extends React.Component<VendorMenuItemProps> {
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
            onClick={() => this.props.editMenuItem()}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            style={{ margin: 0.5 }}
            onClick={() => this.props.deleteMenuItem()}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any): VendorMenuItemDispatchProps => ({
  editMenuItem: (item: MenuItem) => dispatch(vendorEditMenuItem(item)),
  deleteMenuItem: (item: MenuItem) => dispatch(vendorDeleteMenuItem(item))
});

const VendorMenuItem = connect(null, mapDispatchToProps)(MenuItemElement);

export default VendorMenuItem;
