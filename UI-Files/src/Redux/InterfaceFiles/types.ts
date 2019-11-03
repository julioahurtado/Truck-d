export interface MenuItem {
    name: String
    description: String
    price: Number
}

export interface VendorInfo {
    name: String
    description: String
    cuisine: String
    hours: String
    phone: Number
    city: String
    state: String
    address: String
    menu: MenuItem[]
}

export interface CustomerInfo {
    name: String
    email: String
    phone: Number
}

export interface Order {
    customerInfo: CustomerInfo
    orderNumber: Number
    orderItems: MenuItem[]
}