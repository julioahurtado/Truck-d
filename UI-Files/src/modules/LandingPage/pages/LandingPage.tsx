import * as React from "react";
import { Router, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorLandingPage from "../../Vendor/pages/VendorLandingPage";
import CustomerLandingPage from "../../Customer/pages/CustomerLandingPage";
import VendorOrderQueue from "../../Vendor/pages/VendorOrderQueue";
import "../css/Style.css";
export default class LandingPage extends React.Component<any> {
  render() {
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
                    <Button variant="warning">Customer</Button>
                  </Link>
                </Col>
                <Col className="Vendor">
                  <Link to={"/vendor"}>
                    <Button variant="danger">Vendor</Button>
                  </Link>
                </Col>
                <Col className="Test">
                  <Link to={"/Test"}>
                    <Button variant="primary">Test</Button>
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
          <Route path="/test">
            <VendorOrderQueue></VendorOrderQueue>
          </Route>
        </Switch>
      </Router>
    );
  }
}
