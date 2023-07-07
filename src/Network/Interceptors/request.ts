import {InternalAxiosRequestConfig} from 'axios';

export default async function defaultRequest(
    config: InternalAxiosRequestConfig,
) {
    return config;
}
