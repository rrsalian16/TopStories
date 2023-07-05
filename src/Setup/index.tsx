import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@TopStories/Routes';
import {Loader} from '@TopStories/Component';

const Setup: React.FC = () => {
    const isLoading = true;

    if (isLoading) return <Loader />;

    return (
        <NavigationContainer>
            <AppNavigator isLoggedIn={false} />
        </NavigationContainer>
    );
};

export default Setup;
