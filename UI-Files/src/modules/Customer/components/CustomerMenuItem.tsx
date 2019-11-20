
import * as React from 'react'
import { Button } from 'react-bootstrap'
import '../css/Style.css'
import { addItemToCart, removeItemFromCart, AddItemToCartAction, RemoveItemFromCartAction } from '../../../Redux/ActionFiles/CustomerActions';
import { MenuItem } from '../../../Redux/InterfaceFiles/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface MenuListProps extends MenuListDispatchProps{
    id: number,
    name: String,
    description: String,
    price: number,
}

interface MenuListDispatchProps {
    addItem: any,
    removeItem: any
}

class MenuItemElement extends React.Component<MenuListProps> {

    handleAdd() {
        const item: MenuItem = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            price: this.props.price
        }
        this.props.addItem(item)
    }

    handleRemove() {
        const item: MenuItem = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            price: this.props.price
        }
        this.props.removeItem(item)
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
                    <Button variant="warning" style={{margin: .5}} onClick={() => this.handleRemove()} >-</Button>
                    <Button variant="success" style={{margin: .5}} onClick={() => this.handleAdd()} >+</Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddItemToCartAction | RemoveItemFromCartAction>): MenuListDispatchProps => ({
    addItem: (item: MenuItem) =>
        dispatch(addItemToCart(item)),
    removeItem: (item: MenuItem) =>
        dispatch(removeItemFromCart(item))
});

export const CustomerMenuItem = connect(
    mapDispatchToProps
)(MenuItemElement)