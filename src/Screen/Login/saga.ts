import {END_POINTS, Network} from '@TopStories/Network';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './reducer';
import {SecureStorageKey, SecureUtils} from '@TopStories/Utils/secureStorage';

interface PayloadType {
    emai: string;
    password: string;
}

const {request, success, error} = actions;

export default function* dashboardSagaWatcher() {
    yield takeLatest(request, dashboardSagaWorker);
}

export function userLogin(data: unknown) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.LOGIN,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}

export function* dashboardSagaWorker({payload}: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(userLogin, payload);
        const {data, status} = response;
        if (status === 200) {
            const {access_token = ''} = data as {access_token: string};
            SecureUtils.set(SecureStorageKey.ACCESS_TOKEN, access_token);
        }
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
