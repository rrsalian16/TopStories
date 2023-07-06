import {AxiosRequestConfig} from 'axios';

import {BaseAxiosInstance} from './axios';

const networkCall = (config: AxiosRequestConfig) =>
    BaseAxiosInstance.request(config);

export const Network = {
    networkCall,
};
