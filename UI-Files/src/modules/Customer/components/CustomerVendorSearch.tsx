import * as React from "react";
import {
  Form,
  ListGroup,
  Button,
  Col,
  Spinner,
  Table,
  Container,
  Row
} from "react-bootstrap";
import CustomerVendorListItem, {
  CustomerVendorItem
} from "./CustomerVendorListItem";

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
  handleChange() {
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
                  onChange={() => this.handleChange()}
                  type="text"
                  placeholder="Search Food Truck by Name, city, type"
                />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ padding: "14px", fontSize: "20px" }}
                >
                  Go!
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </div>
        {this.props.isLoading && (
          <Container>
            <Row>
              <Col>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          </Container>
        )}
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
