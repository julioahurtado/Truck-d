
import * as React from 'react'
import { Router, Link, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import history from '../../History/history'
import VendorLandingPage from '../../Vendor/pages/VendorLandingPage'
import CustomerLandingPage from '../../Customer/pages/CustomerLandingPage'
import './Style.css'
import {_GET, _POST, _DELETE} from  "../../../REST/restapiutil"

export default class LandingPage extends React.Component<any> {
    render() {

        var test = {
            "test3": "completed",
            "hello": "fdsf"
        }
        var testJSON = JSON.stringify(test);


        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact={true} path='/'>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>Choose your experience</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="Customer">
                                        <Link to={'/customer'} >
                                            <Button variant="primary">Customer</Button>                                        
                                        </Link>
                                    </Col>
                                    <Col className="Vendor" >
                                        <Link to={'/vendor'} >
                                            <Button variant="primary">Vendor</Button>
                                        </Link>
                                    </Col>
                                    <Col className="test" >
                                        <Button variant="primary" onClick={() => _GET('http://localhost:5000/'+'test1')}>GET</Button>
                                    </Col>
                                    <Col className="test" >
                                        <Button variant="primary" onClick={() => _DELETE('http://localhost:5000/'+'test2')}>DELETE</Button>
                                    </Col>
                                    <Col className="test" >
                                        <Button variant="primary" onClick={() => _POST('http://localhost:5000/', testJSON)}>POST</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path='/customer'>
                            <CustomerLandingPage>
                            </CustomerLandingPage>
                        </Route>
                        <Route path='/vendor'>
                            <VendorLandingPage>
                            </VendorLandingPage>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}