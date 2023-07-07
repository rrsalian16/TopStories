import {LoginReducer} from '@TopStories/Screen/Login';
import {RegistrationReducer} from '@TopStories/Screen/Registration';
import {StoryListReducer} from '@TopStories/Screen/StoryList';
import {combineReducers} from 'redux';

export default combineReducers({
    auth: combineReducers({
        login: LoginReducer,
        registration: RegistrationReducer,
    }),
    storyList: StoryListReducer,
});
