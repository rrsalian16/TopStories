import React from 'react';
import {RouteName} from './routeName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './type';

import {Login, Registration} from '@TopStories/Screen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
            initialRouteName={RouteName.LOGIN}>
            <Stack.Screen name={RouteName.LOGIN} component={Login} />
            <Stack.Screen
                name={RouteName.REGISTRATION}
                component={Registration}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
