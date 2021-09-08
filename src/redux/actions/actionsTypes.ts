export const none: string = '@none';
export const SIGNOUT: string = '@SIGNOUT';

export const cart: Record<string, string> = {
    get: '@cart/get',
    patch: '@cart/patch',
};

export const catalog: Record<string, string> = {
    get: '@catalog/get',
    add: '@catalog/add',
};

export const user: Record<string, string> = {
    setCurrent: '@user/setCurrent',
    login: '@user/login',
    register: '@user/register',
    current: '@user/current',
    logout: '@user/logout',
    loading: '@user/loading',
};

export const customerAddress: Record<string, string> = {
    find: '@customerAddress/find',
    get: '@customerAddress/get',
    patch: '@customerAddress/patch',
    delete: '@customerAddress/delete',
};

export const orders: Record<string, string> = {
    find: '@orders/find',
    create: '@orders/create',
    get: '@orders/get',
    patch: '@orders/patch',
    delete: '@orders/delete',
};

