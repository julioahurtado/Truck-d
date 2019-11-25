import * as React from "react";
import { Form, Container, Button, ListGroup } from "react-bootstrap";
import VendorMenuItem from "./VendorMenuItem";

interface VendorProfileEditorMenuProps {
  menuItems?: any[];
}

export default class VendorProfileEditorFields extends React.Component<
  VendorProfileEditorMenuProps
> {
  handleAdd() {}

  render() {
    return (
      <Container>
        <div>
          <Button variant="primary" onClick={() => this.handleAdd()}>
            Add an Item
          </Button>
        </div>
        <div>
          <ListGroup>
            {this.props.menuItems &&
              this.props.menuItems.map((item: any) => {
                // <VendorMenuItem></VendorMenuItem>
              })}
          </ListGroup>
        </div>
      </Container>
    );
  }
}
