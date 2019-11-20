
import * as React from 'react'
import { Button, ListGroup, Row, Col , Form} from 'react-bootstrap'
import '../css/Style.css'
import { Link } from 'react-router-dom'

interface MenuListProps{
    itemName: string
    itemDescriptiion :string
    itemPrice :string
}
export default class MenuList extends React.Component<MenuListProps> {
    render() {
        return (
            <Form>
                <Row>
                    <Col>
            <div className="listFood">
            <ListGroup>
                
                <ListGroup.Item >
                    <p>
                        {this.props.itemName}
                    </p>
                    <p>
                        {this.props.itemDescriptiion}                 
                        <p style={{ textAlign:  'right'}}>
                            {this.props.itemPrice}
                        </p>
                    </p>
                        <div className='text-right'>      
                        
                            <Button variant="warning" style={{margin: .5}} type="button">-</Button>
                            <Button variant="success" style={{margin: .5}}type="button">+</Button>
                        </div>  
                </ListGroup.Item>
            </ListGroup>
            </div>
            </Col>
            </Row>
            </Form>
        )
    }
}
