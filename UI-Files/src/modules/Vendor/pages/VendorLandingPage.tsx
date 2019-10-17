import * as React from 'react'
import  { Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import history from '../../History/history'
import VendorProfileEditor from './VendorProfileEditor'
import VendorOrderQueue from './VendorOrderQueue'


 


export default class VendorLandingPage extends React.Component<any> {
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/vendor'} exact={true}>
                        <Link to={'/vendor/editprofile'}>
                            <button>Edit your profile</button>
                        </Link>
                        <Link to={'/vendor/orderqueue'}>
                            <button>Order Queue</button>
                        </Link>
                        <Link to={'/vendor/editprofile'}>
                            <button>Edit your profile</button>
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
                </Switch>
            </Router>
        )
    }
}