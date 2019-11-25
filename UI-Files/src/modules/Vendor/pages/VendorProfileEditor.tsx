import * as React from "react";
import VendorProfileEditorFields from "../components/VendorProfileEditorFields";
import VendorProfileEditorMenu from "../components/VendorProfileEditorMenu";
import VendorAddMenuItemModal from "../components/VendorAddMenuItemModal";
import { vendorGetMenu } from "../../../Redux/ActionFiles/VendorActions";
import { connect } from "react-redux";
import { RootState } from "../../../Redux/StoreFiles/store";

interface VendorProfileEditorProps extends VendorProfileEditorDispatchProps {
  id?: number;
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
        <VendorAddMenuItemModal />
        <VendorProfileEditorFields />
        <VendorProfileEditorMenu />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): VendorProfileEditorProps => ({
  id: state.vendor.profile.id
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
