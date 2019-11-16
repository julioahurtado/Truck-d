import * as React from 'react'
import { Button } from 'react-bootstrap'

interface CustomerCartProps{
    itemName?: String,
    itemDescription?: String,
    itemPrice?: Number
}

 export default class CustomerMenuItem extends React.Component<CustomerCartProps> {

    handleRemoveFromCart(){

    }

    handleAddtoCart(){

    }

    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <p>
                    {this.props.itemName}
                </p>
                <p>
                    {this.props.itemDescription}
                </p>
                <p>
                    {this.props.itemPrice}
                </p>
                <Button style={{margin: 10}}variant="danger" type="button" onClick={() => {this.handleRemoveFromCart()}} >-</Button>
                <Button style={{margin: 10}}variant="success" type="button" onClick={() => {this.handleAddtoCart()}}>+</Button>
            </div>

        )
    }
}