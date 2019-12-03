import TestUtils from 'react-dom/test-utils'; // ES6
import VendorProfileEditorMenu from '../Vendor/components/VendorProfileEditorMenu';
it("Checks if it's a component", function () {
    var component = TestUtils.isElement(
        'VendorProfileEditorMenu'
    );
    expect(component);
});