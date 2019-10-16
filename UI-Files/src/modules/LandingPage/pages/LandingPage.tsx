
import * as React from 'react'
import  { Router, Link, Switch, Route} from 'react-router-dom'
import history from '../../History/history'
import VendorLandingPage from '../../Vendor/pages/VendorLandingPage'
import CustomerLandingPage from '../../Customer/pages/CustomerLandingPage'
 
interface LandingPageProps{
    description: String;
}

export default class LandingPage extends React.Component<LandingPageProps> {
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/'>
                        <div>
                            <h1>Choose your experience</h1>
                            <div>
                                <Link to={'/Customer'} >
                                    <button>Customer</button>
                                </Link>
                                <Link to={'/Vendor'} >
                                    <button>Vendor</button>
                                </Link>
                            </div>
                        </div>
                    </Route>
                    <Route path='/Customer'>
                        <CustomerLandingPage>
                        </CustomerLandingPage>
                    </Route>
                    <Route path='/Vendor'>
                        <VendorLandingPage>
                        </VendorLandingPage>
                    </Route>
                </Switch>
            </Router>
        )
    }
}