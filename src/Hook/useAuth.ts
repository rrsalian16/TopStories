import {LoginActions} from '@TopStories/Screen/Login';
import {useAppDispatch, useAppSelector} from './redux';
import {get} from 'lodash';
import {useState} from 'react';
import {RegistrationActions} from '@TopStories/Screen/Registration';

export type SetLoginProps = {
    email: string;
    password: string;
};

const useAuth = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const dispatch = useAppDispatch();

    const authData = useAppSelector((state) => state.auth);
    const loginData = get(authData, 'login');
    const registrationData = get(authData, 'registration');

    const accesToken = get(loginData, ['data', 'access_token'], false);
    if (accesToken) setLoggedIn(true);

    const dispatchLogin = ({email, password}: SetLoginProps) => {
        dispatch(LoginActions.clearState());
        dispatch(LoginActions.request({email, password}));
    };

    const dispatchRegistration = ({email, password}: SetLoginProps) => {
        dispatch(RegistrationActions.clear());
        dispatch(RegistrationActions.request({email, password}));
    };

    const setLoggedOut = () => {
        dispatch(LoginActions.clearState());
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
