import {AxiosError} from 'axios';

export default async function defaultResponseError(error: AxiosError) {
    return Promise.reject(error);
}
