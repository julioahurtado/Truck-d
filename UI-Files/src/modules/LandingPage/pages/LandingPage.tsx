import * as React from "react";
import { Router, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorLandingPage from "../../Vendor/pages/VendorLandingPage";
import CustomerLandingPage from "../../Customer/pages/CustomerLandingPage";
import "../css/Style.css";

import { store } from "../../../Redux/StoreFiles/store";
import { vendorSignIn } from "../../../Redux/ActionFiles/VendorActions";
import { fetchVendors } from "../../../Redux/ActionFiles/CustomerActions";

let test_dispatch = () => {
  store.dispatch<any>(vendorSignIn("user", "pass"));
  store.dispatch<any>(fetchVendors("Test"));
};

export default class LandingPage extends React.Component<any> {
  componentDidMount() {
    test_dispatch();
  }

  render() {
    var huskyTest = "will this be pretied?";
    var h2 = "will this be pretied  ?";
    var hfdsuskyTest = "will this be pretied?";
    return (
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/">
            <Container>
              <Row>
                <Col>
                  <h1>Choose your experience</h1>
                </Col>
              </Row>
              <Row>
                <Col className="Customer">
                  <Link to={"/customer"}>
                    <Button variant="primary">Customer</Button>
                  </Link>
                </Col>
                <Col className="Vendor">
                  <Link to={"/vendor"}>
                    <Button variant="primary">Vendor</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/customer">
            <CustomerLandingPage></CustomerLandingPage>
          </Route>
          <Route path="/vendor">
            <VendorLandingPage></VendorLandingPage>
          </Route>
        </Switch>
      </Router>
    );
  }
}
