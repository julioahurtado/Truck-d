import * as React from 'react'
import  { Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import history from '../../History/history'
import CustomerCart from './CustomerCart'
import CustomerMenu from './CustomerMenuPage'


 
interface CustomerLandingPageProps{
}

export default class CustomerLandingPage extends React.Component<any> {
    render(){
        var CustomerMenuName = 'TestRestaurant'
        return (
            <Router history={history}>
                <Switch>
                    <Route path={'/customer'} exact={true}>
                        <Link to={'/customer/cart'}>
                            <button>Checkout</button>
                        </Link>
                        <Link to={`/customer/menu/${CustomerMenuName}`}>
                            <button>Menu</button>
                        </Link>
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
                </Switch>
            </Router>
        )
    }
}