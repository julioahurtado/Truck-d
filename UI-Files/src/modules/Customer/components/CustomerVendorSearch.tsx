
import * as React from 'react'
import { Form, ListGroup, Spinner } from 'react-bootstrap'
import CustomerVendorListItem, { CustomerVendorItem } from './CustomerVendorListItem'

import { fetchVendors, SearchThunkDispatch } from '../../../Redux/ActionFiles/CustomerActions';
import { VendorInfo } from '../../../Redux/InterfaceFiles/types';
import { RootState } from '../../../Redux/StoreFiles/store';
import { connect } from 'react-redux';

interface CustomerVendorSearchProps {
    vendorList?: VendorInfo[] | null
    isLoading?: Boolean
    fetchVendors?: any
}

interface CustomerVendorSearchState {
    searchField: any;
}


export class VendorSearch extends React.Component<CustomerVendorSearchProps,CustomerVendorSearchState> {

    constructor(props: CustomerVendorSearchProps){
        super(props);
        this.state = {
            searchField: React.createRef()
        }
    }

    // Fetch vendors based on search query
    handleChange(){
        const query: String = this.state.searchField.current.value;
        this.props.fetchVendors(query)
    }

    render() {
        return (
            <div>
                <div style={{margin: 10}}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control ref={this.state.searchField} onChange={() => this.handleChange()} type="text" placeholder="Search..." />
                    </Form.Group>
                </div>
                {this.props.isLoading && <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
                {!this.props.isLoading && <ListGroup style={{padding: '2px'}}>
                    {this.props.vendorList && this.props.vendorList.map((vendor: VendorInfo) => {
                        return <CustomerVendorListItem
                            vendor={vendor}
                        ></CustomerVendorListItem>
                    })}
                </ListGroup>}
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): CustomerVendorSearchProps => ({
    vendorList: state.customer.search.vendors,
    isLoading: state.customer.search.isLoading
});

const mapDispatchToProps = (dispatch: SearchThunkDispatch): CustomerVendorSearchProps => ({
    fetchVendors: (query: String) =>
        dispatch(fetchVendors(query))
});

const CustomerVendorSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(VendorSearch)

export default CustomerVendorSearch;