export interface User {
    id: number;
    role_id: number;
    owner_user_id: null;
    customerId: number;
    shop_id: number;
    name: string;
    authentication_token: null;
    identification: string;
    user: string;
    email: string;
    password: string;
    active: number;
    created_at: Date;
    last_login_at: Date;
    wholesale_member: boolean;
    shop: Shop;
    role: Role;
    customer: Customer;
    warehouse: Shop;
    wholesale: Wholesale;
}

export interface Customer {
    id: number;
    user_id: number;
    owner_user_id: number;
    clasification_id: number;
    name: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    identification: string;
    birthDate: Date;
    discount: number;
    active: number;
    creditable: boolean;
    interest_rate: number;
    creditTop: number;
    createdAt: Date;
    newPassword?: string;
    confirmPassword?: string;
}

export interface Role {
    id: number;
    name: string;
    type: string;
}

export interface Shop {
    id: number;
    name: string;
}

export interface Wholesale {
    active: boolean;
    lastOrder: LastOrder;
    message: string;
}
export interface Status {
    name: string;
    default: boolean;
    color: string;
    emailNotification: boolean;
    emailTemplate: string;
    active: boolean;
    createdAt: string;
    status: string;
}
export interface LastOrder {
    createdAt: null;
    totalPaid: number;
    status: Status;
}