import {END_POINTS, Network} from '@TopStories/Network';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {SearchRequest, actions} from './reducer';
import {SearchResponse} from './type';

const {request, success, error} = actions;

type ResponseTyp = {
    response: SearchResponse;
};

export default function* dashboardSagaWatcher() {
    yield takeLatest(request, dashboardSagaWorker);
}

export function userStorySearch(data: SearchRequest) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.STORY_SEARCH(data.search, data.page),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* dashboardSagaWorker({payload}: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<ResponseTyp> = yield call(
            userStorySearch,
            payload,
        );

        yield put(success({...response.data.response, page: payload.page}));
    } catch (_error) {
        yield put(error(_error));
    }
}
