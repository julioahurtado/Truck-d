import * as React from 'react'
import { VendorHours } from '../../../Redux/InterfaceFiles/types';

interface CustomerVendorListItemProps {
    vendorName: String;
    vendorDescription: String;
    vendorCuisine: String;
    vendorHours: VendorHours;
}

export default class CustomerVendorListItem extends React.Component<CustomerVendorListItemProps> {
    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <p>
                    {this.props.vendorName}
                </p>
                <p>
                    {this.props.vendorDescription}
                </p>
                <p>
                    {this.props.vendorCuisine}
                </p>
                <p>
                    {"OPEN: " + this.props.vendorHours.open + ",CLOSE: " + this.props.vendorHours.close}
                </p>
            </div>

        )
    }
}