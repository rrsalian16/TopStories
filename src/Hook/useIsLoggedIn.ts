import {SecureStorageKey, SecureUtils} from '@TopStories/Utils';
import {useAppSelector} from './redux';
import {get} from 'lodash';

const useIsLoggedIn = () => {
    const loginData = useAppSelector((state) => state.auth.login.data);

    const accessToken = SecureUtils.get(SecureStorageKey.ACCESS_TOKEN);

    const isLoggedIn = !!(get(loginData, 'access_token', false) || accessToken);

    return {isLoggedIn};
};

export default useIsLoggedIn;
