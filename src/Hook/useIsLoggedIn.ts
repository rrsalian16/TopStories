import {SecureStorageKey, SecureUtils} from '@TopStories/Utils';
import {useAppSelector} from './redux';
import {get} from 'lodash';
import {useEffect, useState} from 'react';
import {store} from '@TopStories/Store';
import {LoginActions} from '@TopStories/Screen/Login';

const getAccessToken = async (
    cb: React.Dispatch<React.SetStateAction<string>>,
) => {
    const token = (await SecureUtils.get(SecureStorageKey.ACCESS_TOKEN)) || '';
    cb(token);
};

const useIsLoggedIn = () => {
    const [accessToken, setAccessToken] = useState('');

    const loginData = useAppSelector((state) => state.auth.login.data);
    const isLoading = useAppSelector((state) => state.auth.login.loading);
    const logOut = () => store.dispatch(LoginActions.clear());

    useEffect(() => {
        getAccessToken(setAccessToken);
    }, []);

    const isLoggedIn = get(loginData, 'access_token', false) || accessToken;

    return {isLoggedIn: !!isLoggedIn, accessToken, isLoading, logOut};
};

export default useIsLoggedIn;
