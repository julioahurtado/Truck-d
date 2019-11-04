import * as React from 'react'
import { Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import history from '../../History/history'
import CustomerCart from './CustomerCart'
import CustomerMenu from './CustomerMenuPage'
<<<<<<< HEAD
import CustomerFoodTrucks from './CustomerFoodTrucks'
import { Button, Container, Col, Row } from 'react-bootstrap'
import '../css/Style.css';



interface CustomerLandingPageProps {
}

export default class CustomerLandingPage extends React.Component<any> {
    render() {
        var CustomerMenuName = 'TestRestaurant'
=======
import CustomerVendorSearch from '../components/CustomerVendorSearch'




export default class CustomerLandingPage extends React.Component<any> {
    render() {
        var CustomerMenuName = 'Test Restaurant'
>>>>>>> 943291887636ecf2278b1a4238a2343f77b7d13f
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/customer'} exact={true}>
<<<<<<< HEAD
                        <Container>
                            <Col className="customer">
                                <Row>
                                    <Link to={'/customer/cart'}>
                                        <Button variant="warning">Checkout</Button>
                                    </Link>
                                </Row>
                            </Col>
                            <Col className="customer">
                                <Row>
                                    <Link to={`/customer/menu/${CustomerMenuName}`}>
                                        <Button variant="danger">Menu</Button>
                                    </Link>
                                </Row>
                            </Col>
                            <Col className="customer">
                                <Row>
                                    <Link to={`/customer/foodtrucks`}>
                                        <Button variant="danger">Food Trucks</Button>
                                    </Link>
                                </Row>
                            </Col>
                        </Container>
=======
                       <CustomerVendorSearch>
                       </CustomerVendorSearch>
>>>>>>> 943291887636ecf2278b1a4238a2343f77b7d13f
                    </Route>
                    <Route path={'/customer/cart'}>
                        <CustomerCart>
                        </CustomerCart>
                    </Route>
                    <Route path={'/customer/menu/:restaurantName'}>
                        <CustomerMenu
                            RestaurantName={CustomerMenuName}>
                        </CustomerMenu>
                    </Route>
                    <Route path={'/customer/foodtrucks'}>
                        <CustomerFoodTrucks>
                        </CustomerFoodTrucks>
                    </Route>
                </Switch>
            </Router>
        )
    }
}