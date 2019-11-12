import * as React from 'react'
import { Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import history from '../../History/history'
import CustomerCart from './CustomerCart'
import CustomerMenu from './CustomerMenuPage'
import CustomerVendorSearch from '../components/CustomerVendorSearch'




export default class CustomerLandingPage extends React.Component<any> {
    render() {
        var CustomerMenuName = 'Test Restaurant'
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/customer'} exact={true}>
                       <CustomerVendorSearch>
                       </CustomerVendorSearch>
                    </Route>
                    <Route path={'/customer/cart'}>
                        <CustomerCart>
                        </CustomerCart>
                    </Route>
                    <Route path={'/customer/menu/'}>
                        <CustomerMenu
                            RestaurantName={CustomerMenuName}>
                        </CustomerMenu>
                    </Route>
                </Switch>
            </Router>
        )
    }
}