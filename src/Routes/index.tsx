import React from 'react';
import AuthStack from './authStack';
import DashboardStack from './dashbaordStack';
import {RouteService} from './service';

type AppNvigatorProps = {
    isLoggedIn: boolean;
};

const AppNavigator: React.FC<AppNvigatorProps> = (props: AppNvigatorProps) => {
    const {isLoggedIn = false} = props;
    return isLoggedIn ? <DashboardStack /> : <AuthStack />;
};

export {RouteService};
export default React.memo(AppNavigator);
