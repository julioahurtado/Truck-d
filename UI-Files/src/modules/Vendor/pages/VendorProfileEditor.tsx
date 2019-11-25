import * as React from "react";
import VendorProfileEditorFields from "../components/VendorProfileEditorFields";
import VendorProfileEditorMenu from "../components/VendorProfileEditorMenu";
import VendorAddMenuItemModal from "../components/VendorAddMenuItemModal";
import VendorEditMenuItemModal from "../components/VendorEditMenuItemModal";
import { vendorGetMenu } from "../../../Redux/ActionFiles/VendorActions";
import { connect } from "react-redux";
import { RootState } from "../../../Redux/StoreFiles/store";
import { Spinner } from "react-bootstrap";

interface VendorProfileEditorProps extends VendorProfileEditorDispatchProps {
  id?: number;
  isLoading?: boolean;
}

interface VendorProfileEditorDispatchProps {
  getMenu?: any;
}

class ProfileEditor extends React.Component<VendorProfileEditorProps> {
  componentDidMount() {
    this.props.getMenu(this.props.id);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!this.props.isLoading && <VendorProfileEditorFields />}
        {!this.props.isLoading && <VendorProfileEditorMenu />}
        {!this.props.isLoading && <VendorAddMenuItemModal />}
        {!this.props.isLoading && <VendorEditMenuItemModal />}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): VendorProfileEditorProps => ({
  id: state.vendor.profile.id,
  isLoading: state.vendor.profile.isLoading
});

const mapDispatchToProps = (
  dispatch: any
): VendorProfileEditorDispatchProps => ({
  getMenu: (id: number) => dispatch(vendorGetMenu(id))
});

const VendorProfileEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditor);

export default VendorProfileEditor;
