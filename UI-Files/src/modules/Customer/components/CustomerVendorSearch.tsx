import * as React from "react";
import { Form, ListGroup, Button, Col, Spinner } from "react-bootstrap";
import CustomerVendorListItem from "./CustomerVendorListItem";

import {
  fetchVendors,
  SearchThunkDispatch
} from "../../../Redux/ActionFiles/CustomerActions";
import { VendorInfo } from "../../../Redux/InterfaceFiles/types";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";

interface CustomerVendorSearchProps {
  vendorList?: VendorInfo[] | null;
  isLoading?: boolean;
  fetchVendors?: any;
}

interface CustomerVendorSearchState {
  searchField: any;
}

export class VendorSearch extends React.Component<
  CustomerVendorSearchProps,
  CustomerVendorSearchState
> {
  constructor(props: CustomerVendorSearchProps) {
    super(props);
    this.state = {
      searchField: React.createRef()
    };
  }

  // Fetch vendors based on search query
  handleSearch() {
    const query: String = this.state.searchField.current.value;
    this.props.fetchVendors(query);
  }

  render() {
    return (
      <div>
        <div className="centered" style={{ margin: 10 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Row>
              <Col>
                <Form.Control
                  style={{ width: 500, padding: "30px", fontSize: "25px" }}
                  ref={this.state.searchField}
                  type="text"
                  placeholder="Search Food Truck by Name, city, type"
                />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  disabled={this.props.isLoading}
                  type="submit"
                  style={{ padding: "14px", fontSize: "20px" }}
                  onClick={() => this.handleSearch()}
                >
                  {this.props.isLoading ? (
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  ) : (
                    "Go!"
                  )}
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </div>
        {!this.props.isLoading && (
          <ListGroup style={{ padding: "30px" }}>
            {this.props.vendorList &&
              this.props.vendorList.map((vendor: VendorInfo) => {
                return (
                  <CustomerVendorListItem
                    vendor={vendor}
                  ></CustomerVendorListItem>
                );
              })}
          </ListGroup>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): CustomerVendorSearchProps => ({
  vendorList: state.customer.search.vendors,
  isLoading: state.customer.search.isLoading
});

const mapDispatchToProps = (
  dispatch: SearchThunkDispatch
): CustomerVendorSearchProps => ({
  fetchVendors: (query: String) => dispatch(fetchVendors(query))
});

const CustomerVendorSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorSearch);

export default CustomerVendorSearch;
