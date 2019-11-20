
import * as React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { CustomerMenuItem } from '../components/CustomerMenuItem';
import { MenuItem } from '../../../Redux/InterfaceFiles/types';
import { MenuState } from '../../../Redux/ReducerFiles/CustomerReducers/MenuReducer';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface CustomerMenuProps extends MenuState {}

export class CustomerMenu extends React.Component<CustomerMenuProps> {
    render() {
        return (
            <div>
                <h1>{this.props.vendor && this.props.vendor.name}</h1>
                <br/>
                {!this.props.isLoading && <ListGroup style={{padding: '2px'}}>
                    {this.props.menu && this.props.menu.map((item: MenuItem) => 
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
                            <Button variant="primary" style={{position: 'relative', bottom: '-20px', margin: 5, right: '-20px'}} type="button">Checkout</Button>
                        </Link>
                    </Col>
                </Row>
            </div>	            
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): CustomerMenuProps => ({
    menu: state.customer.menuPage.menu,
    vendor: state.customer.menuPage.vendor,
    isLoading: state.customer.menuPage.isLoading
});

const CustomerMenuViewer = connect(
    mapStateToProps
)(CustomerMenu)

export default CustomerMenuViewer;