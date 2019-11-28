import * as React from "react";
import { Link } from "react-router-dom";
import {
  fetchMenu,
  updateVendor
} from "../../../Redux/ActionFiles/CustomerActions";
import { VendorInfo } from "../../../Redux/InterfaceFiles/types";
import { connect } from "react-redux";
import { RootState } from "../../../Redux/StoreFiles/store";

interface CustomerVendorListItemProps {
  vendor?: VendorInfo | null;
  fetchMenu?: any;
  updateVendor?: any;
}

export class CustomerVendorItem extends React.Component<
  CustomerVendorListItemProps
> {
  // Fetch menu and associated vendor for CustomerMenu Page
  handleCick() {
    if (this.props.vendor) {
      this.props.fetchMenu(this.props.vendor.id);
      this.props.updateVendor(this.props.vendor);
    } else {
      console.log("Vendor is undefined");
    }
  }

  render() {
    return (
      <>
        <tr>
          <td>
            <Link
              to={"/customer/menu/"}
              onClick={() => this.handleCick()}
              style={{ color: "white" }}
            >
              {this.props.vendor && this.props.vendor.name}
            </Link>
          </td>
          <td>{this.props.vendor && this.props.vendor.description}</td>
          <td>
            {this.props.vendor &&
              "OPEN: " +
                this.props.vendor.hours.open +
                ", CLOSE: " +
                this.props.vendor.hours.close}
          </td>
          <td>{this.props.vendor && this.props.vendor.cuisine}</td>
        </tr>
      </>
    );
  }
}

const mapStateToProps = (
  state: RootState,
  ownProps: CustomerVendorListItemProps
): CustomerVendorListItemProps => ({
  vendor: ownProps.vendor
});

const mapDispatchToProps = (dispatch: any): CustomerVendorListItemProps => ({
  fetchMenu: (id: Number) => dispatch(fetchMenu(id)),
  updateVendor: (vendor: VendorInfo) => dispatch(updateVendor(vendor))
});

const CustomerVendorListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerVendorItem);

export default CustomerVendorListItem;
