import * as React from "react";
import { ListGroup, Row, Col, Button, Spinner } from "react-bootstrap";
import { CustomerMenuItem } from "../components/CustomerMenuItem";
import {
  MenuItem,
  CartInfo,
  OrderItem,
  VendorInfo
} from "../../../Redux/InterfaceFiles/types";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface CustomerMenuProps {
  cart?: OrderItem[];
  vendor?: VendorInfo;
  isLoading?: boolean;
}

export class CustomerMenu extends React.Component<CustomerMenuProps> {
  // send customer to the checkout screen
  handleCheckout() {
    if (this.props.cart && this.props.vendor) {
      console.log("Cart contains items");
    } else console.log("No items are in your cart");
  }

  render() {
    return (
      <div>
        <h1 className="label">{this.props.vendor && this.props.vendor.name}</h1>
        <br />
        {this.props.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!this.props.isLoading && (
          <ListGroup style={{ padding: "2px" }}>
            {this.props.vendor &&
              this.props.vendor.menu &&
              this.props.vendor.menu.map((item: MenuItem) => {
                return (
                  <CustomerMenuItem
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  ></CustomerMenuItem>
                );
              })}
          </ListGroup>
        )}
        <div className="centered">
          <Row>
            <Col xs={6}>
              <Link to="/customer">
                <Button
                  style={{
                    position: "relative",
                    margin: 5,
                    left: "-20px",
                    padding: "12px",
                    fontSize: "18px",
                    marginBottom: "20%"
                  }}
                  variant="secondary"
                  type="button"
                >
                  Return
                </Button>
              </Link>
            </Col>
            <Col xs={6}>
              <Link to="/customer/order">
                <Button
                  variant="primary"
                  style={{
                    position: "relative",
                    margin: 5,
                    right: "-20px",
                    padding: "12px",
                    fontSize: "18px",
                    marginBottom: "20%"
                  }}
                  onClick={() => this.handleCheckout()}
                  type="button"
                >
                  Checkout
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerMenuProps => ({
  cart: state.customer.cart.items,
  vendor: state.customer.vendor,
  isLoading: state.customer.menu.isLoading
});

const CustomerMenuViewer = connect(mapStateToProps)(CustomerMenu);

export default CustomerMenuViewer;
