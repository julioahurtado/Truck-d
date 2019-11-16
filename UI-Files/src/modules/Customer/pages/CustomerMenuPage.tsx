
import * as React from 'react'
import { ListGroup } from 'react-bootstrap'
import CustomerMenuItem from '../components/CustomerMenuItem';
import { MenuItem } from '../../../Redux/InterfaceFiles/types';
import { MenuState } from '../../../Redux/ReducerFiles/CustomerReducers/MenuReducer';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';

interface CustomerMenuProps extends MenuState {}

export class CustomerMenu extends React.Component<CustomerMenuProps> {
   
    componentDidMount() {
        console.log(this.props.menu)
    }

    render() {
        return (
            <div>
                <h1>{this.props.vendor && this.props.vendor.name}</h1>
                <br/>
                {!this.props.isLoading && <ListGroup style={{padding: '2px'}}>
                    {this.props.menu && this.props.menu.map((item: MenuItem) => 
                        {
                            console.log(item)
                            return (
                                    <CustomerMenuItem>
                                        itemName={item.name}
                                        itemDescription={item.description}
                                        itemPrice={item.price}
                                    </CustomerMenuItem>
                            )
                        }
                    )}
                </ListGroup>}
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): CustomerMenuProps => ({
    menu: state.customer.menuPage.menu.menu,
    vendor: state.customer.menuPage.vendor.vendor,
    isLoading: state.customer.menuPage.menu.isLoading
});

const CustomerMenuViewer = connect(
    mapStateToProps
)(CustomerMenu)

export default CustomerMenuViewer;