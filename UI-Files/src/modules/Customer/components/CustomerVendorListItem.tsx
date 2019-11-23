import * as React from 'react'
import { Link } from 'react-router-dom'
import { fetchMenu, updateMenuWithVendor } from '../../../Redux/ActionFiles/CustomerActions';
import { VendorInfo } from '../../../Redux/InterfaceFiles/types';
import { connect } from 'react-redux';
import { RootState } from '../../../Redux/StoreFiles/store';
import '../css/Style.css'

interface CustomerVendorListItemProps {
    vendor?: VendorInfo | null,
    fetchMenu?: any,
    updateVendor?: any
}

export class CustomerVendorItem extends React.Component<CustomerVendorListItemProps> {

    // Fetch menu and associated vendor for CustomerMenu Page
    handleCick(){
        if (this.props.vendor) {
            this.props.fetchMenu(this.props.vendor.id)
            this.props.updateVendor(this.props.vendor)
        } else {
            console.log("Vendor is undefined")
        }
    }

    render() {
        return (
            <div className="listRes">
                <Link to={'/customer/menu/'} onClick={() => this.handleCick()}>
                    <h1 > 
                        {this.props.vendor && this.props.vendor.name}
                    </h1>

                </Link>
                <p style={{font: 'roboto'}}>
                    {this.props.vendor && this.props.vendor.description}
                </p>
                <p>
                    {this.props.vendor && this.props.vendor.cuisine}
                </p>
                <p>
                    {this.props.vendor && "OPEN: " + this.props.vendor.hours.open +
                    ", CLOSE: " + this.props.vendor.hours.close}
                </p>
            </div>

        )
    }
}

const mapStateToProps = (state: RootState, ownProps: CustomerVendorListItemProps): CustomerVendorListItemProps => ({
    vendor: ownProps.vendor
});

const mapDispatchToProps = (dispatch: any): CustomerVendorListItemProps => ({
    fetchMenu: (id: Number) =>
        dispatch(fetchMenu(id)),
    updateVendor: (vendor: VendorInfo) =>
        dispatch(updateMenuWithVendor(vendor))
});

const CustomerVendorListItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerVendorItem)

export default CustomerVendorListItem;
