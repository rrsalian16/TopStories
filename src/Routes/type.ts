import {RouteName} from '@TopStories/Routes/routeName';
import {StoryDetailsParams} from '@TopStories/Screen/StoryDetail/type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Dashboard Stack
export type DashboardStackParamList = {
    [RouteName.DASHBOARD]: undefined;
    [RouteName.NEWS_LIST]: undefined;
    [RouteName.NEWS_DETAIL]: StoryDetailsParams;
    [RouteName.NEWS_SEARCH]: undefined;
};

//Auth Stack
export type AuthStackParamList = {
    [RouteName.LOGIN]: undefined;
    [RouteName.REGISTRATION]: undefined;
};

// Screen Props
export type DashbaordStackScreenProp<T extends keyof DashboardStackParamList> =
    NativeStackScreenProps<DashboardStackParamList, T>;

export type AuthStackScreenProp<T extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, T>;
