import { Product } from "./product.model";

export interface CatalogProduct {
    _id: string;
    reference: string;
    price: number;
    cost: number;
    description: string;
    barcode: string;
    products: Product[];
    active: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}