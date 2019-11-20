import { Menu, initState, } from '../../ReducerFiles/CustomerReducers/MenuReducer';
import { checkoutOrder, addItemToCart, removeItemFromCart } from '../../ActionFiles/CustomerActions';
import { VendorInfo, MenuItem, OrderItem } from '../../InterfaceFiles/types';

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

const cart: OrderItem[] = [
    {
        id: 1,
        name: "Big Mac",
        description: "Burger",
        price: 4.99,
        quantity: 2
    }, {
        id: 2,
        name: "Shake",
        description: "Milk Shake",
        price: 2.99,
        quantity: 1
    }
]

const menu_item_add_new: MenuItem = {
  id: 3,
  name: "Beyond Burger",
  description: "Buger made from plants",
  price: 6.99
}

const menu_item_add_existing: MenuItem = {
  id: 1,
  name: "Big Mac",
  description: "Burger",
  price: 4.99
}

const menu_item_delete: MenuItem = {
  id: 1,
  name: "Big Mac",
  description: "Burger",
  price: 4.99
}

const cart_base_state_new = Object.assign({}, initState, {
  ...initState,
  vendor: vendor,
  cart: cart
});

const cart_base_state_existing = Object.assign({}, initState, {
    ...initState,
    vendor: vendor,
    cart: cart
});

const cart_base_state_delete = Object.assign({}, initState, {
    ...initState,
    vendor: vendor,
    cart: cart
});

describe('The Menu Reducer', () => {
  it('should add a new item to the cart', () => {
    expect(Menu(cart_base_state_new, addItemToCart(menu_item_add_new)))
    .toEqual(Object.assign({}, cart_base_state_new, {
      ...cart_base_state_new,
      cart: [{
            id: 1,
            name: "Big Mac",
            description: "Burger",
            price: 4.99,
            quantity: 2
        }, {
            id: 2,
            name: "Shake",
            description: "Milk Shake",
            price: 2.99,
            quantity: 1
        }, {
            id: 3,
            name: "Beyond Burger",
            description: "Buger made from plants",
            price: 6.99,
            quantity: 1
        }]
    }))
  })

  it('should increase the quantity of an existing menu item', () => {
    expect(Menu(cart_base_state_existing, addItemToCart(menu_item_add_existing)))
    .toEqual(Object.assign({}, cart_base_state_existing, {
      ...cart_base_state_existing,
      cart: [{
            id: 1,
            name: "Big Mac",
            description: "Burger",
            price: 4.99,
            quantity: 3
        }, {
            id: 2,
            name: "Shake",
            description: "Milk Shake",
            price: 2.99,
            quantity: 1
        }]
    }))
  })
  
  it('should delete an item from the cart', () => {
    expect(Menu(cart_base_state_delete, removeItemFromCart(menu_item_delete)))
    .toEqual(Object.assign({}, cart_base_state_delete, {
      ...cart_base_state_delete,
      cart: [
        {
          id: 1,
          name: "Big Mac",
          description: "Burger",
          price: 4.99,
          quantity: 2
      }, {
          id: 2,
          name: "Shake",
          description: "Milk Shake",
          price: 2.99,
          quantity: 1
      }]
    }))
  })
})