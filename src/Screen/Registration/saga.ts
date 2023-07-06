import {END_POINTS, Network} from '@TopStories/Network';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './reducer';

interface PayloadType {
    emai: string;
    password: string;
}

const {request, success, error} = actions;

export default function* dashboardSagaWatcher() {
    yield takeLatest(request, dashboardSagaWorker);
}

export function userRegistration(data: unknown) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const config: AxiosRequestConfig = {
        url: END_POINTS.REGISTRATION,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}

export function* dashboardSagaWorker({payload}: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(
            userRegistration,
            payload,
        );
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
