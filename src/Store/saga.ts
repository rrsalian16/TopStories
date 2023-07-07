import {LoginSaga} from '@TopStories/Screen/Login';
import {RegistrationSaga} from '@TopStories/Screen/Registration';
import {StoryListSaga} from '@TopStories/Screen/StoryList';
import {all} from 'redux-saga/effects';

export default function* () {
    yield all([LoginSaga(), RegistrationSaga(), StoryListSaga()]);
}
