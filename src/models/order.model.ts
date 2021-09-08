import { Product } from "./product.model";
export interface Order {
    _id: string;
    summary: Summary;
    orderType: string;
    paymentStatus: string;
    cartId: string;
    user_id: number;
    deliveryAddress: DeliveryAddress;
    products: Product[];
    payments: Payment[];
    customer: Customer;
    status: Status;
    statusHistory: StatusHistory[];
    comments: any[];
    createdAt: string;
    updatedAt: string;
    code: number;
    __v: number;
}

export interface Customer {
    user_id: number;
    customerId: number;
    firstName: string;
    lastName: string;
    identification: string;
    phone: string;
}

export interface DeliveryAddress {
    addressId: number;
    user_id: number;
    firstName: string;
    lastName: string;
    address: string;
    address2: string;
    phone: string;
    phone_mobile: string;
    city: string;
    state: string;
    country: string;
}

export interface Payment {
    paymentStatus: string;
    totalPaid: number;
    tax: number;
    _id: string;
    paymentMethod: string;
    paymentData: PaymentData;
    createdAt: string;
}

export interface PaymentData {
    _id: string;
    name: string;
    title: string;
    description: string;
}
export interface Status {
    name: string;
    default: boolean;
    active: boolean;
    createdAt: string;
    status: string;
}

export interface StatusHistory {
    _id: string;
    name: string;
    createdAt: string;
    status: string;
}

export interface Summary {
    shipping: number;
    discount: number;
    tax: number;
    balance: number;
    totalPaid: number;
    subtotal: number;
    total: number;
}
