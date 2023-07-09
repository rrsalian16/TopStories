import React from 'react';
import Dashboard, {DashboardProps} from '../index';
import {_render} from '@TopStories/Utils/testUtils';

const props = {
    navigation: {
        navigate: () => {
            console.log();
        },
    },
} as DashboardProps;

describe('Dashboard Screen', () => {
    it('it should go to Registration Screen', () => {
        _render(<Dashboard {...props} />);
    });
});
