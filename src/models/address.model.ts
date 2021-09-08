export interface Address {
    _id?: number;
    user_id?: number;
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    phone: string;
    phone_mobile: string;
    city: string;
    state: string;
    country: string;
    by_default?: boolean;
    shippingZone?: any;
}