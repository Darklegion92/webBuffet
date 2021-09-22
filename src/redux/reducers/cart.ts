import {
    cart
} from '../actions/actionsTypes';

export const defaultState: any = {
    cartData: {
        summary: {
            total: 0
        },
    },
    loading: true
};

const Cart = (state = defaultState, action: any) => {
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