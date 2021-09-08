import { ActionRedux, CartState } from '@/models/redux.model';
import {
    cart
} from '../actions/actionsTypes';

export const defaultState: CartState = {
    cartData: {
        summary: {
            total: 0
        },
    },
    loading: true
};

const Cart = (state = defaultState, action: ActionRedux) => {
    switch (action.type) {
        case cart.get:
            return {
                ...state,
                cartData: action.data,
                loading: false
            }
        case cart.patch:
            return {
                ...state,
                cartData: action.data
            }

        default:
            return state;
    }
}

export default Cart