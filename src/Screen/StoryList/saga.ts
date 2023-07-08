import {END_POINTS, Network} from '@TopStories/Network';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './reducer';
import {StoryType} from './type';

const {request, success, error} = actions;

type ResponseTyp = {
    results: StoryType[];
};

export default function* dashboardSagaWatcher() {
    yield takeLatest(request, dashboardSagaWorker);
}

export function userStoryList(key: string) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.TOP_STORIES(key),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* dashboardSagaWorker({payload}: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<ResponseTyp> = yield call(
            userStoryList,
            payload.type,
        );

        yield put(success(response.data.results));
    } catch (_error) {
        yield put(error(_error));
    }
}
