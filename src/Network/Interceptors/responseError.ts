import {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {tokenRefresh} from './utils';

type OriginalRequestType = InternalAxiosRequestConfig<unknown> & {
    _retry: boolean;
};

export default async function defaultResponseError(error: AxiosError) {
    if (error.response) {
        const originalRequest = error.config as OriginalRequestType;

        if (error.response.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true;
            try {
                tokenRefresh();
                return;
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }
    return Promise.reject(error);
}
