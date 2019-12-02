import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorProfileEditor from "./VendorProfileEditor";
import VendorOrderQueue from "./VendorOrderQueue";

export default class VendorActionsRouting extends React.Component<any> {
  render() {
    return (
      <Router history={history}>
        <Route path={"/vendor/actions"} exact={true}>
          <Container>
            <Row>
              <Col>
                <Link to={"/vendor/actions/editprofile"}>
                  <Button style={{ margin: 2 }} variant="primary">
                    Profile Editor
                  </Button>
                </Link>
                <Link to={"/vendor/actions/orderqueue"}>
                  <Button style={{ margin: 2 }} variant="primary">
                    Order Queue
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path={"/vendor/actions/editprofile"}>
          <VendorProfileEditor></VendorProfileEditor>
        </Route>
        <Route path={"/vendor/actions/orderqueue"}>
          <VendorOrderQueue></VendorOrderQueue>
        </Route>
      </Router>
    );
  }
}
