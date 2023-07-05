import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@TopStories/Routes';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Setup: React.FC = () => {
    const isLoading = true;

    if (isLoading) return <ActivityIndicator style={style.loader} />;
    return (
        <NavigationContainer>
            <AppNavigator isLoggedIn={false} />
        </NavigationContainer>
    );
};

const style = StyleSheet.create({
    loader: {
        flex: 1,
    },
});

export default Setup;
