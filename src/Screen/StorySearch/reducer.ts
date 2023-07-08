import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {SearchResponse} from './type';

type StorySearchState = {
    loading: boolean;
    data?: SearchResponse;
    error?: unknown;
};

const initialState: StorySearchState = {
    loading: false,
    error: undefined,
    data: undefined,
};

const StorySearchReducer = createSlice({
    name: 'StorySearch',
    initialState,
    reducers: {
        request(state: StorySearchState, action: PayloadAction<string>) {
            return {...state, loading: true};
        },
        success(
            state: StorySearchState,
            action: PayloadAction<SearchResponse>,
        ) {
            return {...state, loading: false, data: action.payload};
        },
        error(state: StorySearchState, action: PayloadAction<unknown>) {
            return {...state, loading: false, error: action.payload};
        },
        clear: () => initialState,
    },
});

export const {actions} = StorySearchReducer;
export default StorySearchReducer.reducer;
