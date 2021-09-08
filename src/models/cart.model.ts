import { Product } from './product.model'

export interface CartData {
    _id?: string;
    summary: Summary;
    status?: string;
    guestId?: string;
    user_id?: number;
    products?: Product[];
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

export interface Summary {
    subtotal?: number;
    total: number;
    shipping?: number;
    discount?: number;
    tax?: number;
}