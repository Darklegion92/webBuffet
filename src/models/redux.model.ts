import { User } from "./user.model";
import { CartData } from "./cart.model";
import { CustomerAddress } from "./customerAddress.model";
import { Order } from "./order.model";
import { CatalogProduct } from "./catalog.model";

export interface CartState {
    cartData: CartData;
    loading: boolean;
}
export interface UserState {
    current: User | {};
    isLogged: boolean;
    loading: boolean;
}
export interface CustomerAddressState {
    current: CustomerAddress | {};
    list: CustomerAddress[] | [];
}
export interface OrdersState {
    current: Order | {};
    list: Order[] | [];
}
export interface CatalogState {
    current: {
        total: number;
        limit: number;
        skip: number;
        data: CatalogProduct[] | [];
    }
}

export interface ActionRedux {
    type: string;
    data?: any;
}

export interface ReduxState {
    cart: CartState;
}