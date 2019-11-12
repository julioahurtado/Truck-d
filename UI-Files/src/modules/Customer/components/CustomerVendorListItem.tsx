import * as React from 'react'
import { Link } from 'react-router-dom'


interface CustomerVendorListItemProps {
    vendorName: String;
    vendorDescription: String;
    vendorCuisine: String;
    vendorHours: String;
    vendorID: Number;
}


export default class CustomerVendorListItem extends React.Component<CustomerVendorListItemProps> {

    handleCick(){
        console.log('BRUHS');
        
    }

    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <Link to={'/customer/menu/'} onClick={() => this.handleCick()}>
                    <h1>
                        {this.props.vendorName}
                    </h1>

                </Link>
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