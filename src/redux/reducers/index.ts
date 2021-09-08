import {
    combineReducers
} from 'redux';
import cart, { defaultState as CartState } from './cart';
import { SIGNOUT } from '../actions/actionsTypes'
import { ActionRedux, ReduxState } from '@/models/redux.model';

export const AppInitialState: ReduxState = {
    cart: CartState,
    
}

const appReducer = combineReducers({
    cart,
});

const rootReducer = (state, action: ActionRedux) => {
    if (action.type === SIGNOUT) {
        localStorage.clear()
        state = AppInitialState;
    }
    return appReducer(state, action);
};

export default rootReducer;