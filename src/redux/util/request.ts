import { getCookie } from "@/lib/session";
import axios, { Method } from "axios";
import { responseErrors } from '../util';
import Router from "next/router";
interface ParamsType {
    url: string;
    data?: any,
    method: Method;
    callback: (response?: any) => void;
    headers?: any
}
export const request = (params: ParamsType) => {
    const { url, method, data, headers = {}, callback } = params
    return new Promise(function (resolve: any, reject: any) {
        var _headers, body;
        const jwt = getCookie("jwt")
        const token = jwt ? decodeURIComponent(jwt).replace(/"/g, '').replace('[', '').replace(']', '').trim() : '';
        if (data && data.__proto__.constructor === window.FormData) {
            _headers = {
                ...headers,
            };
            body = data;
        } else {
            _headers = {
                ...headers,
                "Content-Type": 'application/json'
            };
            body = JSON.stringify(data);
        }
        if (jwt) {
            _headers = { ..._headers, Authorization: `Bearer ${token}` }
        }

        axios(url, {
            method,
            //mode: 'cors',
            //withCredentials: true,
            headers: _headers,
            data: body
        })
            .then(({ status, data, headers, error }: any) => {
                if (status >= 200 && status < 400) {
                    if (headers["content-type"].indexOf("application/json") >= 0) {
                        callback(data);
                        resolve(data);
                        return;
                    }
                    callback();
                    resolve();
                    return;
                } else if (status >= 400) {
                    throw new Error(responseErrors(data));
                } else if (error) {
                    throw new Error(error);
                }
                throw new Error("Error desconocido");
            })
            .catch(function (err) {
                if (err?.response?.status === 401) {
                    Router.push(`/auth/login?redirect=${Router.route}`)
                }
                if (err?.response?.status === 400) {
                    if (!jwt) {
                        localStorage.clear()

                    }
                    console.log("Error de sesion caducada");

                }
                reject(err.response);
            });
    });
};