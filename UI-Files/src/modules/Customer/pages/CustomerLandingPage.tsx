import * as React from 'react'
import { Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import history from '../../History/history'
import CustomerCart from './CustomerCart'
import CustomerMenu from './CustomerMenuPage'
import CustomerFoodTrucks from './CustomerFoodTrucks'
import { Container, Col, Row, Button } from 'react-bootstrap'
import './style.css'



interface CustomerLandingPageProps {
}

export default class CustomerLandingPage extends React.Component<any> {
    render() {
        var CustomerMenuName = 'Test Restaurant'
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/customer'} exact={true}>
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