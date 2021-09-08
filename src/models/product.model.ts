export interface Product {
    discount: number;
    _id: string;
    product_id: number;
    quantity: number;
    reference: string;
    description: string;
    barcode: string;
    price: number;
    wholesale_price: number;
    color: Color;
    size: Size;
    warehouse_id: number;
    unitPrice: number;
    cover?: { [key: string]: { [key: string]: string } };
}

export interface Color {
    id: number;
    name: string;
    image: string;
    html: string;
}

export interface Size {
    id: number;
    value: string;
}