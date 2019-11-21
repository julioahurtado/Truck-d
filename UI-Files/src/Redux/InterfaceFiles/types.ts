export interface MenuItem {
    id: number,
    name: String
    description: String
    price: number
}

export interface OrderItem extends MenuItem {
    quantity: number
}

export interface CartInfo {
    cart?: OrderItem[] | null,
    vendor?: VendorInfo | null
}

export interface VendorHours {
    open: number,
    close: number
}

export interface VendorInfo {
    id: number,
    name: String
    description: String
    cuisine: String
    hours: VendorHours
    phone: number
    city: String
    state: String
    address: String
    menu: (MenuItem | undefined)[]
}

export interface CustomerInfo {
    name: String
    email: String
    phone: number
}

export interface Order {
    customerInfo: CustomerInfo
    orderNumber: Number
    orderItems: OrderItem[]
}