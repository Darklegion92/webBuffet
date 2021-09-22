import {
    combineReducers
} from 'redux';
import cart, { defaultState as CartState } from './cart';
import { SIGNOUT } from '../actions/actionsTypes'

export const AppInitialState: any = {
    cart: CartState,

}

const appReducer = combineReducers({
    cart,
});

const rootReducer = (state, action: any) => {
    if (action.type === SIGNOUT) {
        localStorage.clear()
        state = AppInitialState;
    }
    return appReducer(state, action);
};

export default rootReducer;