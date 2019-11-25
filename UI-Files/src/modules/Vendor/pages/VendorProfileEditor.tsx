import * as React from "react";
import { Row, Col, Form, Button, ListGroup, Modal } from "react-bootstrap";
import VendorProfileEditorFields from "../components/VendorProfileEditorFields";
import VendorProfileEditorMenu from "../components/VendorProfileEditorMenu";
import VendorAddMenuItemModal from "../components/VendorAddMenuItemModal";

export default class VendorProfileEditor extends React.Component<any> {
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
