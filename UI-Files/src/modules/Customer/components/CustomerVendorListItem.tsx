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

  NumbertoStringTime(timeNum: number): string {
    let amPM = timeNum < 1200 ? " A.M." : " P.M.";
    if (timeNum > 1259) {
      timeNum = timeNum - 1200;
    }
    let time = timeNum.toString();

    if (timeNum < 10) {
      time = "00:0" + time;
    } else if (timeNum < 100) {
      time = "00:" + time;
    } else if (timeNum < 1000) {
      time = "0" + time;
      time = time.substring(0, 2) + ":" + time.substring(2);
    } else {
      time = time.substring(0, 2) + ":" + time.substring(2);
    }

    return time + amPM;
  }

  render() {
    return (
      <div className="listFood" style={{ justifyContent: "space-between" }}>
        <Link to={"/customer/menu/"} onClick={() => this.handleCick()}>
          <h1 className="label">
            {this.props.vendor && this.props.vendor.name}
          </h1>
        </Link>
        <p>{this.props.vendor && this.props.vendor.description}</p>
        <p>{this.props.vendor && this.props.vendor.cuisine}</p>
        <p>
          <span style={{ color: "green" }}> {"OPEN: "} </span>
          {this.props.vendor &&
            this.NumbertoStringTime(this.props.vendor.hours.open)}
          <span style={{ color: "red" }}> {"CLOSE: "} </span>
          {this.props.vendor &&
            this.NumbertoStringTime(this.props.vendor.hours.close)}
        </p>
      </div>
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
