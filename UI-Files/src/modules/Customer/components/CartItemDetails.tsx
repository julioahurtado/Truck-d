import * as React from 'react'
import { Button } from 'react-bootstrap'
import '../css/Style.css'
import { addItemToCart, removeItemFromCart, AddItemToCartAction, RemoveItemFromCartAction } from '../../../Redux/ActionFiles/CustomerActions';
import { MenuItem } from '../../../Redux/InterfaceFiles/types';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

interface MenuListProps extends MenuItem, MenuListDispatchProps{}

interface MenuListDispatchProps {
    addItem: any,
    removeItem: any
   // clear: any

}



class CartMenuItemElement extends  React.Component<MenuListProps> {
    
    constructor(props: Readonly<MenuListProps>){
        super(props);
        this.state= {
          count:0
        };
      }
      



    handleAdd() {
        const item: MenuItem = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            price: this.props.price
        }
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

   /* handleClear() {
        const item: MenuItem = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            price: this.props.price
        }
        this.props.clear(item)
    }*/

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
                    <Button variant="danger" style={{margin: .5}} /*onClick={() => this.handleAdd()} */>x</Button>
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

export const CartItemDetails = connect(
    null,
    mapDispatchToProps
)(CartMenuItemElement)