import {SetLoginProps} from '@TopStories/Hook/useAuth';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type RegistrationState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
};

const initialState: RegistrationState = {
    loading: false,
    error: undefined,
    data: undefined,
};

const registrationReducer = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        request(
            state: RegistrationState,
            action: PayloadAction<SetLoginProps>,
        ) {
            return {...state, loading: true};
        },
        success(state: RegistrationState, action: PayloadAction<unknown>) {
            return {...state, loading: false, data: action.payload};
        },
        error(state: RegistrationState, action: PayloadAction<unknown>) {
            return {...state, loading: false, error: action.payload};
        },
        clear: () => initialState,
    },
});

export const {actions} = registrationReducer;
export default registrationReducer.reducer;
