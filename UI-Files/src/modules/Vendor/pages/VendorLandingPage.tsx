import * as React from "react";
import { Router, Link, Switch, Route, Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorProfileEditor from "./VendorProfileEditor";
import VendorOrderQueue from "./VendorOrderQueue";
import VenderSignIn from "../components/VendorSignIn";
import VenderSignUp from "../components/VendorSignUp";
import "../css/Style.css";

export default class VendorLandingPage extends React.Component<any> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={"/vendor"} exact={true}>
            <Container>
              <Row>
                <Col>
                  <Link to={"/vendor/signin"}>
                    <Button variant="primary">Sign In</Button>
                  </Link>{" "}
                  <Link to={"/vendor/signup"}>
                    <Button variant="primary">Sign Up</Button>
                  </Link>
                  <VendorOrderQueue />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path={"/vendor/signin"}>
            <VenderSignIn></VenderSignIn>
          </Route>
          <Route path={"/vendor/signup"}>
            <VenderSignUp></VenderSignUp>
          </Route>
          <Route path={"/vendor/editprofile"}>
            <VendorProfileEditor></VendorProfileEditor>
          </Route>
          <Route path={"/vendor/orderqueue"}>
            <VendorOrderQueue></VendorOrderQueue>
          </Route>
          <Route path={"/vendor/signedIn"}>
            <h1>Signed In</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
