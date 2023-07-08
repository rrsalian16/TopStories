import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {SearchResponse} from './type';

const LAST_HISTORY_LIMIT = 5;
type StorySearchState = {
    loading: boolean;
    data?: SearchResponse;
    error?: unknown;
    history: string[];
};

const initialState: StorySearchState = {
    loading: false,
    error: undefined,
    data: undefined,
    history: [],
};

const lastSearchFilter = (history: string[], value: string) =>
    [...new Set([value, ...history])].slice(0, LAST_HISTORY_LIMIT);

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
        adddHistory: (
            state: StorySearchState,
            action: PayloadAction<string>,
        ) => ({
            ...state,
            history: lastSearchFilter(state.history, action.payload),
        }),
        clear: (state: StorySearchState) => ({
            ...initialState,
            history: state.history,
        }),
    },
});

export const {actions} = StorySearchReducer;
export default StorySearchReducer.reducer;
