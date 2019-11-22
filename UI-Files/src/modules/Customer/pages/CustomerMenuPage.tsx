import * as React from "react";

interface CustomerMenuProps {
  RestaurantName: String;
}

export default class CustomerMenu extends React.Component<CustomerMenuProps> {
  render() {
    return (
      <div>
        <h1>{this.props.RestaurantName}</h1>
      </div>
    );
  }
}
