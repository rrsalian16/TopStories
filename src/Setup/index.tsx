import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@TopStories/Routes';
import {Loader} from '@TopStories/Component';
import RNBootSplash from 'react-native-bootsplash';
import {navigationRef} from '@TopStories/Routes/service';
import {useAuth} from '@TopStories/Hook';

const Setup: React.FC = () => {
    const isLoading = false;

    const {isLoggedIn} = useAuth();

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true, duration: 500});
        }, 2000);
    }, []);

    if (isLoading) return <Loader />;

    return (
        <NavigationContainer ref={navigationRef}>
            <AppNavigator isLoggedIn={isLoggedIn} />
        </NavigationContainer>
    );
};

export default Setup;
