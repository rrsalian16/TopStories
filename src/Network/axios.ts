import axios from 'axios';

import * as Interceptors from './Interceptors';
import {NETWORK_CONST} from './constant';

const BASE_URL = NETWORK_CONST.AUTH_BASE_URL;

export const BaseAxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: NETWORK_CONST.AXIOS_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Cache-Control': 'no-cache',
    },
});

BaseAxiosInstance.interceptors.request.use(
    Interceptors.onRequestInterceptor,
    Interceptors.onRequestInterceptorError,
);

BaseAxiosInstance.interceptors.response.use(
    Interceptors.onResponseInterceptor,
    Interceptors.onResponseInterceptorError,
);

export const setGlobalHeader = (token: string) => {
    BaseAxiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
        token,
    };
};

export const setGlobalBaseUrl = (url: string) => {
    BaseAxiosInstance.defaults.baseURL = url;
};
