import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@TopStories/Routes';
import {Loader} from '@TopStories/Component';
import RNBootSplash from 'react-native-bootsplash';
import {navigationRef} from '@TopStories/Routes/service';
import {useIsLoggedIn} from '@TopStories/Hook';
import {setGlobalBaseUrl, setGlobalHeader} from '@TopStories/Network/axios';
import {NETWORK_CONST} from '../Network/constant';

const Setup: React.FC = () => {
    const {isLoggedIn, accessToken, isLoading} = useIsLoggedIn();

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true, duration: 500});
        }, 2000);
    }, []);

    if (isLoading) return <Loader />;

    if (isLoggedIn) {
        setGlobalHeader(accessToken);
        setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <AppNavigator isLoggedIn={isLoggedIn} />
        </NavigationContainer>
    );
};

export default Setup;
