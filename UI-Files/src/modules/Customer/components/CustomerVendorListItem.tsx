import * as React from "react";

interface CustomerVendorListItemProps {
  vendorName: string;
  vendorDesription: string;
  vendorCuisine: string;
  vendorHours: string;
}

export default class CustomerVendorListItem extends React.Component<
  CustomerVendorListItemProps
> {
  render() {
    return (
      <div
        style={{
          background: "#FFFFFF",
          borderWidth: "3px",
          borderColor: "black",
          borderStyle: "solid",
          padding: "2px"
        }}
      >
        <p>{this.props.vendorName}</p>
        <p>{this.props.vendorDesription}</p>
        <p>{this.props.vendorCuisine}</p>
        <p>{this.props.vendorHours}</p>
      </div>
    );
  }
}
