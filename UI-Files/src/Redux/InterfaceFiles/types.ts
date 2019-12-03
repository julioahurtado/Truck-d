export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface CartInfo {
  cart: OrderItem[];
  vendor: VendorInfo;
}

export interface VendorHours {
  open: number;
  close: number;
}

export interface VendorInfo {
  id: number;
  name: string;
  description: string;
  cuisine: string;
  hours: VendorHours;
  phone: number;
  city: string;
  state: string;
  address: string;
  menu: MenuItem[];
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: number;
}

export interface Order {
  id: number;
  customer: CustomerInfo;
  items: OrderItem[];
  price: number;
}
