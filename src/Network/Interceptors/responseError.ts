import {
    AxiosError,
    AxiosRequestHeaders,
    InternalAxiosRequestConfig,
} from 'axios';
import {BaseAxiosInstance} from '../axios';

type OriginalRequestType = InternalAxiosRequestConfig<unknown> & {
    _retry: boolean;
};

const refreshTokenTry = async (config: OriginalRequestType) => {
    config._retry = true;
    try {
        // const access_token = await tokenRefresh();
        const access_token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlb…3N30.usLwpOtuOfzn_CbBFZqTCgoT3v-vOEGhl29s84KvyKk';
        if (access_token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${access_token}`,
            } as AxiosRequestHeaders;
        }
        return BaseAxiosInstance(config);
    } catch (_error) {
        return Promise.reject(_error);
    }
};

export default async function defaultResponseError(error: AxiosError) {
    if (error.response) {
        const config = error.config as OriginalRequestType;

        if (error.response.status === 405 && !config?._retry) {
            refreshTokenTry(config);
        }
    }
    return Promise.reject(error);
}
