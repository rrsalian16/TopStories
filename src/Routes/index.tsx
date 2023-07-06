import React from 'react';
import AuthStack from './authStack';
import DashboardStack from './dashbaordStack';
import {RouteService} from './service';
import {useIsLoggedIn} from '@TopStories/Hook';

const AppNavigator: React.FC = () => {
    const {isLoggedIn} = useIsLoggedIn();
    return isLoggedIn ? <DashboardStack /> : <AuthStack />;
};

export {RouteService};
export default React.memo(AppNavigator);
