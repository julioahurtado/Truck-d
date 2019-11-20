
import * as React from 'react'
import { Button, ListGroup, Row, Col , Form} from 'react-bootstrap'
import '../css/Style.css'
import { Link } from 'react-router-dom'

interface MenuListProps{
    itemName?: string;
    itemDescriptiion?: string;
    itemPrice?: string;
}
export default class MenuList extends React.Component<MenuListProps> {

    handleAdd(){
        
    }

    handleRemove(){

    }


    render() {
        return (
            <div className="listFood">
                        <div>
                            {this.props.itemName}
                        </div>
                        <div>



                            {this.props.itemDescriptiion}                 
                            <p style={{ textAlign:  'right'}}>
                                {this.props.itemPrice}
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
