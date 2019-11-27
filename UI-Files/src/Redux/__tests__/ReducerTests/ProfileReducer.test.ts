import {
  Profile,
  initState,
  ProfileState
} from "../../ReducerFiles/VendorReducers/ProfileReducer";
import {
  getVendorMenuSuccess,
  updateProfileSuccess,
  signInSuccess,
  signUpSuccess,
  addMenuItemSuccess,
  deleteMenuItemSuccess,
  editMenuItemSuccess
} from "../../ActionFiles/VendorActions";
import { VendorInfo, MenuItem } from "../../InterfaceFiles/types";

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
  menu: []
};

const updated_menu: MenuItem[] = [
  {
    id: 7,
    name: "Fries",
    description: "French Fries",
    price: 1.2
  }
];

const updated_vendor = {
  ...vendor,
  name: "McDonald's"
};

const menu_item: MenuItem = {
  id: 1,
  name: "Beyond Burger",
  description: "Buger made from plants",
  price: 6.99
};

const menu_item_edit: MenuItem = {
  id: 2,
  name: "Fries",
  description: "Classic French Fries",
  price: 1.99
};

const vendor_base_state = Object.assign({}, initState, {
  ...initState,
  ...vendor
});

const vendor_menu_base_state = Object.assign({}, vendor_base_state, {
  ...vendor_base_state,
  menu: updated_menu
});

describe("The Profile Reducer", () => {
  it("should return the original state with updated vendor on profile update", () => {
    expect(Profile(initState, updateProfileSuccess(vendor))).toEqual(
      vendor_base_state
    );
  });

  it("should return the original state with updated vendor on signin", () => {
    expect(Profile(initState, signInSuccess(vendor))).toEqual(
      vendor_base_state
    );
  });

  it("should return the original state with updated vendor on signup", () => {
    expect(Profile(initState, signUpSuccess(vendor))).toEqual(
      vendor_base_state
    );
  });

  it("should update the state with the fetched menu", () => {
    expect(Profile(initState, getVendorMenuSuccess(updated_menu))).toEqual(
      Object.assign({}, initState, {
        ...initState,
        menu: updated_menu
      })
    );
  });

  /*
   * EMPTY MENU TESTS
   */

  it("should add a menu item to the vendor menu", () => {
    expect(Profile(vendor_base_state, addMenuItemSuccess(menu_item))).toEqual(
      Object.assign({}, vendor_base_state, {
        ...vendor_base_state,
        menu: [menu_item]
      })
    );
  });

  it("should delete nothing from empty menu", () => {
    expect(
      Profile(vendor_base_state, deleteMenuItemSuccess(menu_item))
    ).toEqual(
      Object.assign({}, vendor_base_state, {
        ...vendor_base_state,
        menu: []
      })
    );
  });

  it("should update nothing from empty menu", () => {
    expect(
      Profile(vendor_base_state, editMenuItemSuccess(menu_item_edit))
    ).toEqual(
      Object.assign({}, vendor_base_state, {
        ...vendor_base_state,
        menu: []
      })
    );
  });

  /*
   * non empty menu tests
   */

  it("should add a menu item to the vendor menu", () => {
    expect(
      Profile(vendor_menu_base_state, addMenuItemSuccess(menu_item))
    ).toEqual(
      Object.assign({}, vendor_menu_base_state, {
        ...vendor_menu_base_state,
        menu: [
          ...vendor_menu_base_state.menu,
          {
            id: 1,
            name: "Beyond Burger",
            description: "Buger made from plants",
            price: 6.99
          }
        ]
      })
    );
  });

  it("should delete the menu item from the vendor's menu", () => {
    expect(
      Profile(
        vendor_menu_base_state,
        deleteMenuItemSuccess({
          id: 7,
          name: "Beyond Burger",
          description: "Buger made from plants",
          price: 6.99
        })
      )
    ).toEqual(
      Object.assign({}, vendor_menu_base_state, {
        ...vendor_menu_base_state,
        menu: []
      })
    );
  });

  it("should delete nothing because menu item isnt on menu", () => {
    expect(
      Profile(vendor_menu_base_state, deleteMenuItemSuccess(menu_item))
    ).toEqual(
      Object.assign({}, vendor_menu_base_state, {
        ...vendor_menu_base_state,
        menu: vendor_menu_base_state.menu.filter(
          item => item && item.id != menu_item.id
        )
      })
    );
  });

  it("should update an exisiting menu item from the vendor menu", () => {
    expect(
      Profile(vendor_menu_base_state, editMenuItemSuccess(menu_item_edit))
    ).toEqual(
      Object.assign({}, vendor_menu_base_state, {
        ...vendor_menu_base_state,
        menu: vendor_menu_base_state.menu.map(item => {
          if (item && item.id == menu_item_edit.id) {
            return menu_item_edit;
          } else return item;
        })
      })
    );
  });
});
