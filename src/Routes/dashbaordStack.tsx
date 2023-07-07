import React from 'react';
import {RouteName} from './routeName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardStackParamList} from './type';

import {
    Dashboard,
    StoryDetail,
    StoryList,
    StorySearch,
} from '@TopStories/Screen';

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
            <Stack.Screen name={RouteName.STORY_LIST} component={StoryList} />
            <Stack.Screen
                name={RouteName.STORY_DETAIL}
                component={StoryDetail}
            />
            <Stack.Screen
                name={RouteName.STORY_SEARCH}
                component={StorySearch}
            />
        </Stack.Navigator>
    );
};

export default DashboardStack;
