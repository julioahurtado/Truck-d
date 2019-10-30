
import * as React from 'react'
import { ListGroup, Tab, Row, Col } from 'react-bootstrap'


export default class VendorOrderQueue extends React.Component<any> {
    render() {
        return (
            <Tab.Container id="Order-queue" defaultActiveKey="#Order1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#Order1">
                                Order 1 Hamburger pls?!
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Order2">
                                Order 2 Jon's Burrito
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Order3">
                                Order 3 Happy Hour Beer
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Order4">
                                Order 4 Savory-Sweet Buffalo Chicken and Waffles
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Order5">
                                Order 5 3 Musketeers' Chocolate Sundae
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Order6">
                                Order 6 Special Black Hamburger
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#Order1">
                                <div className="img">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4d%2FCheeseburger.jpg%2F1200px-Cheeseburger.jpg&f=1&nofb=1"></img>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Order2">
                                <div className="img">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tacobueno.com%2Fassets%2Ffood%2Fburritos%2FBurrito_BOB_990x725.jpg%3Fv%3D1&f=1&nofb=1"></img>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Order3">
                                <div className="img">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F08%2F23%2Fbeer.jpg%3Fx%3D1200%26y%3D794&f=1&nofb=1"></img>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Order4">
                                <div className="img">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.burntx.com%2Fwp-content%2Fuploads%2F2017%2F02%2FChicken_Waffles.png&f=1&nofb=1"></img>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Order5">
                                <div className="img">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frugalfeeds.com.au%2Fwp-content%2Fuploads%2F2017%2F06%2Fchocolate-sundae_med_hires.png&f=1&nofb=1"></img>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Order6">
                                <div className="img">
                                    <img src="https://cdn.theculturetrip.com/wp-content/uploads/2016/10/12705616_1181244108569946_4061282835030793910_n.jpg"></img>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}