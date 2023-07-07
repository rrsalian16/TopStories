import {END_POINTS, Network} from '@TopStories/Network';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './reducer';
import {SecureStorageKey, SecureUtils} from '@TopStories/Utils/secureStorage';
import {setGlobalBaseUrl, setGlobalHeader} from '@TopStories/Network/axios';
import {NETWORK_CONST} from '@TopStories/Network/constant';

type PayloadType = {
    emai: string;
    password: string;
};

type ResponseData = {
    access_token: string;
    refresh_token: string;
};

const {request, success, error, clear} = actions;

export default function* loginSagaWatcher() {
    yield takeLatest(request, loginRequestSagaWorker);
    yield takeLatest(clear, LoginClearWorker);
}

export function userLogin(data: unknown) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.LOGIN,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}

export function* loginRequestSagaWorker({payload}: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(userLogin, payload);
        const {data, status} = response;
        if (status === 200) {
            const {access_token = '', refresh_token = ''} =
                data as ResponseData;

            if (access_token || refresh_token) {
                setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
                setGlobalHeader(access_token);
                SecureUtils.set(SecureStorageKey.ACCESS_TOKEN, access_token);
                SecureUtils.set(SecureStorageKey.REFRESH_TOKEN, refresh_token);
            }
        }
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function* LoginClearWorker() {
    try {
        SecureUtils.clearStorage();
    } finally {
        yield put(clear());
    }
}
