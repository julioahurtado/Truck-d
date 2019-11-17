export interface MenuItem {
    id: Number,
    name: String
    description: String
    price: Number
}

export interface VendorHours {
    open: Number,
    close: Number
}

export interface VendorInfo {
    id: Number,
    name: String
    description: String
    cuisine: String
    hours: VendorHours
    phone: Number
    city: String
    state: String
    address: String
    menu: (MenuItem | undefined)[]
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