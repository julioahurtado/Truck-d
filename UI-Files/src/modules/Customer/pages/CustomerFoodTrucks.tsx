
import * as React from 'react'
import { Form, Tab, Row, Col, ListGroup } from 'react-bootstrap'



export default class CustomerFoodTrucks extends React.Component<any> {
    render() {
        return (
            <div>

                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Food Trucks</Form.Label>
                        <Form.Control type="foodtruck" placeholder="food truck" />
                    </Form.Group>
                </Form>
                <Tab.Container id="Food Truck-list" defaultActiveKey="#Food Truck1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#Food Truck1">
                                    Food Truck 1
                            </ListGroup.Item>
                                <ListGroup.Item action href="#Food Truck2">
                                    Food Truck 2
                            </ListGroup.Item>
                                <ListGroup.Item action href="#Food Truck3">
                                    Food Truck 3
                            </ListGroup.Item>
                                <ListGroup.Item action href="#Food Truck4">
                                    Food Truck 4
                            </ListGroup.Item>
                                <ListGroup.Item action href="#Food Truck5">
                                    Food Truck 5
                            </ListGroup.Item>
                                <ListGroup.Item action href="#Food Truck6">
                                    Food Truck 6
                            </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Food Truck1">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fvector-food-truck-vector-id185148344%3Fk%3D6%26m%3D185148344%26s%3D170667a%26w%3D0%26h%3DKFrZJS_RSchNUc_KYctU5bOELxxMMfuSQbSofqD6g5c%3D&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Food Truck2">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fzacsburgers.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fhow-to-start-a-food-truck-1024x737.jpg&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Food Truck3">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fapi.ning.com%2Ffiles%2FE0Eg3EAQ2u7yRV0aIMCIe75hTLGRmzUKSpbSu3XoKKr53j5l32XHKoA0tQtJulbxK7Sb5QpJN822c5M2N7Rswd02nJF-U6bt%2Ffoodtruck.png&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Food Truck4">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F803556%2Fscreenshots%2F3314036%2Fhot-dog-dribbble.gif&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Food Truck5">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffabrika-antey.ru%2Fimages%2Fdiner-clipart-diner-food-10.png&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Food Truck6">
                                    <div className="img">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg1%2F904507.jpg&f=1&nofb=1"></img>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}