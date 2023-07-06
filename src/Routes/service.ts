import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const isReady = () => navigationRef.isReady();
const canGoBack = () => navigationRef.isReady() && navigationRef.canGoBack();
const goBack = () => canGoBack() && navigationRef.goBack();

export const RouteService = {
    isReady,
    canGoBack,
    goBack,
};
