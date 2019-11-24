
import * as React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { CustomerMenuItem } from '../components/CustomerMenuItem';
import { MenuItem, CartInfo, OrderItem, VendorInfo } from '../../../Redux/InterfaceFiles/types';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

interface CustomerMenuProps {
    cart?: OrderItem[]
    menu?: MenuItem[]
    vendor?: VendorInfo
    isLoading?: boolean
}

export class CustomerMenu extends React.Component<CustomerMenuProps> {

    // send customer to the checkout screen
    handleCheckout() {
        if (this.props.cart && this.props.vendor) {
            console.log("Cart contains items")
        } else console.log("No items are in your cart")   
    }

    render() {
        return (
            <div>
                <h1>{this.props.vendor && this.props.vendor.name}</h1>
                <br/>
                {!this.props.isLoading && <ListGroup style={{padding: '2px'}}>
                    {this.props.vendor && this.props.vendor.menu.map((item: MenuItem) => 
                        {
                            return (
                                <CustomerMenuItem
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                ></CustomerMenuItem>
                            )
                        }
                    )}
                </ListGroup>}
                <div className="centered">
                <Row> 
                    <Col xs={6}>
                        <Link to="/customer">
                            <Button style={{position: 'relative', bottom: '-20px', margin: 5, left: '-20px'}} variant="secondary"  type="button">Return</Button>
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Link to="/customer/order">
                            <Button variant="primary" style={{position: 'relative', bottom: '-20px', margin: 5, right: '-20px'}} onClick={() => this.handleCheckout()} type="button">Checkout</Button>
                        </Link>
                    </Col>
                </Row>
            </div>	            
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): CustomerMenuProps => ({
    cart: state.customer.cart.items,
    vendor: state.customer.vendor,
    isLoading: state.customer.menu.isLoading
});

const CustomerMenuViewer = connect(
    mapStateToProps
)(CustomerMenu)

export default CustomerMenuViewer;