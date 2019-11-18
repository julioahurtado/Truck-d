import { Profile, initState, ProfileState } from '../../ReducerFiles/VendorReducers/ProfileReducer';
import { updateVendor, updateProfileSuccess, addMenuItemSuccess, deleteMenuItemSuccess, editMenuItemSuccess } from '../../ActionFiles/VendorActions';
import { VendorInfo, MenuItem } from '../../InterfaceFiles/types';

const vendor: VendorInfo = {
  id: 4028,
  name: "Burger King",
  description: "American Fast Food restaurant",
  cuisine: "American",
  phone: 9252338182,
  address: "123 Easy St",
  city: "Santa Cruz",
  state: "California",
  hours: {
    open: 800,
    close: 1800
  },
  menu: [{
    id: 1,
    name: "Big Mac",
    description: "Burger",
    price: 4.99
  }, {
    id: 2,
    name: "Shake",
    description: "Milk Shake",
    price: 2.99
  }]
}

const updated_vendor = {
  ...vendor,
  name: "McDonald's"
}

const menu_item: MenuItem = {
  id: 3,
  name: "Beyond Burger",
  description: "Buger made from plants",
  price: 6.99
}

const menu_item_edit: MenuItem = {
  id: 2,
  name: "Fries",
  description: "Classic French Fries",
  price: 1.99
}

const vendor_base_state = Object.assign({}, initState, {
  ...initState,
  vendor: vendor
});

describe('The Profile Reducer', () => {
  it('should return the original state with updated vendor', () => {
    expect(Profile(initState, updateVendor(vendor))).toEqual(vendor_base_state)
  })

  it('should update original state with inputted vendor info', () => {
    expect(Profile(vendor_base_state, updateProfileSuccess(updated_vendor)))
    .toEqual(Object.assign({}, vendor_base_state, {
      ...vendor_base_state,
      vendor: updated_vendor
    }))
  })

  it('should add a menu item to the vendor menu', () => {
    expect(Profile(vendor_base_state, addMenuItemSuccess(menu_item)))
    .toEqual(Object.assign({}, vendor_base_state, {
      ...vendor_base_state,
      vendor: {
        ...vendor_base_state.vendor,
        menu: [
          ...vendor_base_state.vendor.menu,
          menu_item
        ]
      }
    }))
  })

  it('should delete a menu item from the vendor menu', () => {
    expect(Profile(vendor_base_state, deleteMenuItemSuccess(menu_item)))
    .toEqual(Object.assign({}, vendor_base_state, {
      ...vendor_base_state,
      vendor: {
        ...vendor_base_state.vendor,
        menu: vendor_base_state.vendor.menu.filter(item => {
          item && item.id != menu_item.id
        })
      }
    }))
  })

  it('should update an exisiting menu item from the vendor menu', () => {
    expect(Profile(vendor_base_state, editMenuItemSuccess(menu_item_edit)))
    .toEqual(Object.assign({}, vendor_base_state, {
      ...vendor_base_state,
      vendor: {
        ...vendor_base_state.vendor,
        menu: vendor_base_state.vendor.menu.map(item => {
          if (item && item.id == menu_item_edit.id) {
              return menu_item_edit
          } else return item
        })
      }
    }))
  })
})
