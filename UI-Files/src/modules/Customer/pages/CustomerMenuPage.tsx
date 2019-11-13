
import * as React from 'react'
import { ListGroup } from 'react-bootstrap'
import CustomerMenuItem from '../components/CustomerMenuItem';
import { VendorInfo, MenuItem } from '../../../Redux/InterfaceFiles/types';
import { MenuState } from '../../../Redux/ReducerFiles/CustomerReducers/MenuReducer';
import { RootState } from '../../../Redux/StoreFiles/store';
import { fetchMenu, updateMenuWithVendor } from '../../../Redux/ActionFiles/CustomerActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface CustomerMenuProps extends MenuState {
    fetchMenu?: any,
    updateVendor?: any
}

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

const mapDispatchToProps = (dispatch: any): CustomerMenuProps => ({
    fetchMenu: (id: Number) =>
        dispatch(fetchMenu(id)),
    updateVendor: (vendor: VendorInfo) =>
        dispatch(updateMenuWithVendor(vendor))
});

const CustomerMenuViewer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerMenu)

export default CustomerMenuViewer;