import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {StoryType} from './type';

type StoryListState = {
    loading: boolean;
    data?: StoryType[];
    error?: unknown;
};

const initialState: StoryListState = {
    loading: false,
    error: undefined,
    data: undefined,
};

const storyListReducer = createSlice({
    name: 'storyList',
    initialState,
    reducers: {
        request(state: StoryListState) {
            return {...state, loading: true};
        },
        success(state: StoryListState, action: PayloadAction<StoryType[]>) {
            return {...state, loading: false, data: action.payload};
        },
        error(state: StoryListState, action: PayloadAction<unknown>) {
            return {...state, loading: false, error: action.payload};
        },
        clear: () => initialState,
    },
});

export const {actions} = storyListReducer;
export default storyListReducer.reducer;
