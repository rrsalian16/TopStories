import React from 'react';
import {RouteName} from './routeName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardStackParamList} from './type';

import {Dashboard, NewsDetail, NewsList, Search} from '@TopStories/Screen';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
            initialRouteName={RouteName.DASHBOARD}>
            <Stack.Screen name={RouteName.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={RouteName.NEWS_LIST} component={NewsList} />
            <Stack.Screen name={RouteName.NEWS_DETAIL} component={NewsDetail} />
            <Stack.Screen name={RouteName.NEWS_SEARCH} component={Search} />
        </Stack.Navigator>
    );
};

export default DashboardStack;
