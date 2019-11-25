
import * as React from 'react'
import { Button } from 'react-bootstrap'
import '../css/Style.css'
import { addItemToCart, removeItemFromCart, AddItemToCartAction, RemoveItemFromCartAction } from '../../../Redux/ActionFiles/CustomerActions';
import { MenuItem } from '../../../Redux/InterfaceFiles/types';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

interface MenuListProps extends MenuItem, MenuListDispatchProps{}

interface MenuListDispatchProps {
    addToCart: any,
    removeFromCart: any
}

export class MenuItemElement extends React.Component<MenuListProps> {

    handleRemove() {
        
    }

    handleEdit(){

    }


    render() {        
        return (
            <div className="listFood">
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.description}                 
                    <p style={{ textAlign:  'right'}}>
                        {this.props.price}
                    </p>
                </div>
                <div className='text-right'>
                    <Button variant="danger" style={{margin: .5}} onClick={() => this.handleEdit()}>Edit</Button>
                    <Button variant="danger" style={{margin: .5}} onClick={() => this.handleRemove()}>Remove</Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddItemToCartAction | RemoveItemFromCartAction>): MenuListDispatchProps => ({
    
    // Change to handle new commands
    addToCart: (item: MenuItem) =>
        dispatch(addItemToCart(item)),
    removeFromCart: (item: MenuItem) =>
        dispatch(removeItemFromCart(item))
});

const VendorMenuItem = connect(
    null,
    mapDispatchToProps
)(MenuItemElement)

export default VendorMenuItem;