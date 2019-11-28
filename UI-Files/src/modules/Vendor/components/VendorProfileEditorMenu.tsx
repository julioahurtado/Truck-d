import * as React from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import VendorMenuItem from "./VendorMenuItem";
import { MenuItem } from "../../../Redux/InterfaceFiles/types";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import {
  openAddModal,
  OpenModalAction
} from "../../../Redux/ActionFiles/VendorActions";
import { Dispatch } from "redux";

interface VendorProfileEditorMenuProps
  extends VendorProfileEditorMenuDispatchProps {
  menu?: MenuItem[];
}

interface VendorProfileEditorMenuDispatchProps {
  openAddModal?: any;
}

class ProfileEditorMenu extends React.Component<VendorProfileEditorMenuProps> {
  render() {
    return (
      <Container>
        <div>
          <Button variant="success" onClick={() => this.props.openAddModal()}>
            Add an Item
          </Button>
        </div>
        <div>
          <ListGroup>
            {this.props.menu &&
              this.props.menu.map((item: any) => {
                return <VendorMenuItem item={item}></VendorMenuItem>;
              })}
          </ListGroup>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState): VendorProfileEditorMenuProps => ({
  menu: state.vendor.profile.menu
});

const mapDispatchToProps = (
  dispatch: Dispatch<OpenModalAction>
): VendorProfileEditorMenuDispatchProps => ({
  openAddModal: () => dispatch(openAddModal())
});

const VendorProfileEditorMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditorMenu);

export default VendorProfileEditorMenu;
