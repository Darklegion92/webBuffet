/* eslint-disable @typescript-eslint/camelcase */
export interface ColorItem {
    id: number;
    name: string;
    image: any;
    html: string;
}

export interface SizeItem {
    id: number;
    value: string;
}
export interface CombinationItem {
    _id: string;
    id?: string;
    quantity: number;
    size: SizeItem;
    color: ColorItem;
    barcode?: string;
    product_id?: string | number;
    status: 'approved' | 'discard';
    images: any[];
    product: any;
}

export const sortSizes = (a: any, b: any) => {
    const sizes = [
        'XXXS',
        'XXXS/XXS',
        'XXS/XXXS',
        'XXS',
        'XXS/XS',
        'XS/XXS',
        'XS',
        'XS/S',
        'S/SX',
        'S',
        'S/M',
        'M/S',
        'M',
        'M/L',
        'L/M',
        'L',
        'XL/L',
        'L/XL',
        'XL',
        'XL/XXL',
        'XXL/XL',
        'XXL',
        'XXXL/XXL',
        'XXL/XXXL',
        'XXXL',
    ];

    const aIdx = sizes.indexOf(a.toUpperCase());
    const bIdx = sizes.indexOf(b.toUpperCase());

    if (aIdx < 0) {
        if (!isNaN(a) && !isNaN(b)) {
            return Number(a) - Number(b);
        }
        return !isNaN(a) ? 1 : -1;
    }
    if (bIdx < 0) {
        if (!isNaN(a) && !isNaN(b)) {
            return Number(a) - Number(b);
        }
        return !isNaN(b) ? 1 : -1;
    }
    return aIdx - bIdx;
};

const sortCombinations = (combinations: CombinationItem[], isItem: boolean = false) => {
    if (!combinations) {
        return [];
    }
    let items = []
    if (isItem) {
        items = [...combinations]
        combinations = combinations.map(item => {
            return item.product
        })
    }
    const compare = (a: CombinationItem, b: CombinationItem) => {
        return a.color.name > b.color.name ? -1 : 1;
    };

    const compareSize = (a: CombinationItem, b: CombinationItem) => {
        return a.size.value < b.size.value ? -1 : 1;
    };

    combinations = combinations.sort(compareSize);
    combinations = combinations.sort((a: any, b: any) => sortSizes(a.size.value, b.size.value));
    combinations = combinations.sort(compare).reverse();

    if (isItem) {
        combinations = combinations?.map(combination => {
            const product = items.find(item => item.product.id === combination.id)
            return product
        })

        combinations = combinations.sort((a, b) => {
            if (a.product.reference > b.product.reference) {
                return -1;
            }
            if (a.product.reference < b.product.reference) {
                return 1;
            }

            return 0;
        });
    }

    return combinations
};

export default sortCombinations
