import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../../History/history";
import CustomerCheckout from "../pages/CustomerCheckout";
import CustomerVendorSearch from "../components/CustomerVendorSearch";
import CustomerMenuViewer from "./CustomerMenuPage";

export default class CustomerLandingPage extends React.Component<any> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={"/customer"} exact={true}>
            <CustomerVendorSearch></CustomerVendorSearch>
          </Route>
          <Route path={"/customer/cart"}>
            {/* <CustomerCart>
                        </CustomerCart> */}
          </Route>
          <Route path={"/customer/order"}>
            <CustomerCheckout></CustomerCheckout>
          </Route>
          <Route path={"/customer/menu"}>
            <CustomerMenuViewer></CustomerMenuViewer>
          </Route>
        </Switch>
      </Router>
    );
  }
}