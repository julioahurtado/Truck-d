
import * as React from 'react'
import  { Router, Link, Switch, Route} from 'react-router-dom'
import history from '../../History/history'
import VendorLandingPage from '../../Vendor/pages/VendorLandingPage'
import CustomerLandingPage from '../../Customer/pages/CustomerLandingPage'
 

export default class LandingPage extends React.Component<any> {
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/'>
                        <div>
                            <h1>Choose your experience</h1>
                            <div>
                                <Link to={'/customer'} >
                                    <button>Customer</button>
                                </Link>
                                <Link to={'/vendor'} >
                                    <button>Vendor</button>
                                </Link>
                            </div>
                        </div>
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
        )
    }
}