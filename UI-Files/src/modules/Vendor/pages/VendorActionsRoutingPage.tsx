import * as React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorProfileEditor from "./VendorProfileEditor";
import VendorOrderQueue from "./VendorOrderQueue";

export default class VendorActionsRouting extends React.Component<any> {
  render() {
    return (
      <Router history={history}>
        <Route path={"/vendor/actions"} exact={true}>
          <Link to={"/vendor/actions/editprofile"}>
            <Button variant="primary">Profile Editor</Button>
          </Link>
          <Link to={"/vendor/actions/orderqueue"}>
            <Button variant="primary">Order Queue</Button>
          </Link>
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
