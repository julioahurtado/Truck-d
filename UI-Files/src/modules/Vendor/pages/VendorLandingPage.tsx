import * as React from 'react'
import  { Router, Link, Switch, Route,Redirect} from 'react-router-dom'
import history from '../../History/history'
import VendorProfileEditor from './VendorProfileEditor'
import VendorOrderQueue from './VendorOrderQueue'
import { Form, Container, Button } from 'react-bootstrap'
import '../css/Style.css'
import { SyntheticEvent } from 'react'


 interface VendorLandingPageState {
     signInStatus: Boolean;
 }


export default class VendorLandingPage extends React.Component<any,VendorLandingPageState> {

    constructor(props: any){
        super(props);
        this.state = {
            signInStatus: false
        }
    }

    handleSubmit(event: SyntheticEvent) {
        this.setState({signInStatus: true});
        alert('set state');
        return true;
    }

    render(){

        if(this.state.signInStatus) {
            return <Redirect to='/vendor/signedIn'/>
        }


        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/vendor'} exact={true}>
                        <Container>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId='formUsername'>
                                    <Form.Label>
                                        Username
                                    </Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='formPassword'>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Container>


                        <Link to={'/vendor/editprofile'}>
                            <button>Edit your profile</button>
                        </Link>
                        <Link to={'/vendor/orderqueue'}>
                            <button>Order Queue</button>
                        </Link>
                    </Route>
                    <Route path={'/vendor/editprofile'}>
                        <VendorProfileEditor>
                        </VendorProfileEditor>
                    </Route>
                    <Route path={'/vendor/orderqueue'}>
                        <VendorOrderQueue>
                        </VendorOrderQueue>
                    </Route>
                    <Route path={'/vendor/signedIn'}>
                        <h1>Signed In</h1>
                    </Route>
                </Switch>
            </Router>
        )
    }
}