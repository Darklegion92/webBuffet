import { cart } from './actionsTypes';

const api_url = process.env.REACT_APP_API_URL

export const actionsCreators = {

    get: (guestId) => (dispatchEvent) => {
        return
    },
    patch: (cartId: string, data: any) => (dispatchEvent) => {

        return

    },
    detete: () => (dispatchEvent) => {
        dispatchEvent(({
            type: cart.get,
            data: {
                summary: {
                    total: 0
                },
            },
        }));
    }



}