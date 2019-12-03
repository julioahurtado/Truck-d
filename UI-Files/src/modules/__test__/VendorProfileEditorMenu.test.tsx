import TestUtils from 'react-dom/test-utils'; // ES6
import VendorProfileEditorMenu from '../Vendor/components/VendorProfileEditorMenu';
it("renders an h1", function () {
    var component = TestUtils.isElement(
        'VendorProfileEditorMenu'
    );
    expect(component);
});