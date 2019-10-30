import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Router, Link, Switch, Route } from 'react-router-dom'
import history from '../../History/history'
import VendorProfileEditor from './VendorProfileEditor'
import VendorOrderQueue from './VendorOrderQueue'
import './style.css'



export default class VendorLandingPage extends React.Component<any> {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/vendor'} exact={true}>
                        <Container>
                            <Col className="vendor">

                                <Row>
                                    <Link to={'/vendor/editprofile'}>
                                        <Button variant="warning">Edit your Profile</Button>
                                    </Link>
                                </Row>
                            </Col>
                            <Col className="vendor">
                                <Row>

                                    <Link to={'/vendor/orderqueue'}>
                                        <Button variant="danger">Order Queue</Button>
                                    </Link></Row>
                            </Col>

                        </Container>
                    </Route>
                    <Route path={'/vendor/editprofile'}>
                        <VendorProfileEditor>
                        </VendorProfileEditor>
                    </Route>
                    <Route path={'/vendor/orderqueue'}>
                        <VendorOrderQueue>
                        </VendorOrderQueue>
                    </Route>
                </Switch>
            </Router>
        )
    }
}