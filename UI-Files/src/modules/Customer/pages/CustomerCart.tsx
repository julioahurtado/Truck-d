
import * as React from 'react'
 

import { Row, Col, ListGroup, Container, Button } from 'react-bootstrap'
import {CartItemDetails} from '../components/CartItemDetails'
import { Link } from 'react-router-dom'
import { CustomerMenuItem } from '../components/CustomerMenuItem';
import { MenuItem, CartInfo } from '../../../Redux/InterfaceFiles/types';
import { MenuState } from '../../../Redux/ReducerFiles/CustomerReducers/MenuReducer';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';
import { checkoutOrder, CheckoutOrderAction } from '../../../Redux/ActionFiles/CustomerActions';
import { Dispatch } from 'redux';



interface CustomerMenuProps extends MenuState, CustomerMenuDispatchProps {}
interface CustomerMenuDispatchProps {
    checkout?: any
}
export default class CustomerCart extends React.Component<CustomerMenuProps, any> {
    render(){
        return (
            <div>
               <h1>Cart</h1>
               <br/>
               {!this.props.isLoading && <ListGroup style={{padding: '2px'}}>
                    {this.props.menu && this.props.menu.map((item: MenuItem) => 
                        {
                            return (
                                <CartItemDetails
                                    id={1}
                                    name="name"
                                    description="food"
                                    price={10}
                                ></CartItemDetails>
                            )
                        }
                    )}
                </ListGroup>}
                    
            <div className="centered">
            <Row> 

                    <Col xs={6}>
                    <Link to="/customer/menu/:vendorName'">
                    <Button style={{position: 'relative', bottom: '-20px', margin: 5, left: '-20px'}} variant="secondary"  type="button">Return</Button>
                    </Link>
                    </Col>
                    <Col xs={6}>
                    <Link to="/customer">
                    <Button variant="warning" style={{position: 'relative', bottom: '-20px', margin: 5, right: '-20px'}} type="button">Cancel</Button>
                    </Link>
                    </Col>
            </Row>
        </div>
        </div>
        )
    }
}