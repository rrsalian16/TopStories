import {actions as LoginActions} from '@TopStories/Screen/Login/reducer';
import {actions as RegistrationReducer} from '@TopStories/Screen/Registration/reducer';
import {useAppDispatch, useAppSelector} from './redux';
import {get} from 'lodash';

const isLoggedIn = false;

export type SetLoginProps = {
    email: string;
    password: string;
};

const useAuth = () => {
    const dispatch = useAppDispatch();

    const authData = useAppSelector((state) => state.auth);
    const loginData = get(authData, 'login');
    const registrationData = get(authData, 'registration');

    const dispatchLogin = ({email, password}: SetLoginProps) => {
        dispatch(LoginActions.clear());
        dispatch(LoginActions.request({email, password}));
    };
    const dispatchRegistration = ({email, password}: SetLoginProps) => {
        dispatch(RegistrationReducer.clear());
        dispatch(RegistrationReducer.request({email, password}));
    };

    const setLoggedOut = () => {
        dispatch(LoginActions.clear());
    };

    return {
        isLoggedIn,
        loginData,
        registrationData,
        dispatchLogin,
        dispatchRegistration,
        setLoggedOut,
    };
};

export default useAuth;
