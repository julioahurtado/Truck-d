import * as React from 'react'


interface CustomerVendorListItemProps {
    vendorName: String;
    vendorDescription: String;
    vendorCuisine: String;
    vendorHours: String;
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
                    {this.props.vendorHours}
                </p>
            </div>

        )
    }
}