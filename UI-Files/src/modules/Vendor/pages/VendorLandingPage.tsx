import * as React from "react";
import { Router, Link, Switch, Route, Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../../History/history";
import VendorProfileEditor from "./VendorProfileEditor";
import VendorOrderQueue from "./VendorOrderQueue";
import VendorActionsRouting from "./VendorActionsRoutingPage";
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
                    <Button variant="warning">Sign In</Button>
                  </Link>{" "}
                  <Link to={"/vendor/signup"}>
                    <Button variant="danger">Sign Up</Button>
                  </Link>
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
          <Route path={"/vendor/actions"}>
            <VendorActionsRouting></VendorActionsRouting>
          </Route>

          <Route path={"/vendor/signedIn"}>
            <h1>Signed In</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
