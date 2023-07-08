import {AxiosError} from 'axios';

export default function defaultRequestError(error: AxiosError) {
    return Promise.reject(error);
}
