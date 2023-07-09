import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import Dashboard, {DashboardProps} from '../index';
import {_render} from '@TopStories/Utils/testUtils';

describe('Dashboard screen', () => {
    it('should render the dashboard screen correctly', () => {
        const mockNavigation = {
            navigate: jest.fn() as DashboardProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as DashboardProps;

        const {getByText, getByTestId} = _render(<Dashboard {...props} />);

        expect(getByText('Dashbaord')).toBeTruthy();

        expect(getByTestId('science-card')).toBeTruthy();
        expect(getByTestId('world-card')).toBeTruthy();

        expect(getByText('Search')).toBeTruthy();
    });

    it('should navigate to the story list screen when a card is pressed', () => {
        const mockNavigation = {
            navigate: jest.fn() as DashboardProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as DashboardProps;

        const {getByTestId} = _render(<Dashboard {...props} />);
        const scienceCard = getByTestId('science-card');
        const worldCard = getByTestId('world-card');

        fireEvent.press(scienceCard);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('STORY_LIST', {
            type: 'science',
        });

        fireEvent.press(worldCard);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('STORY_LIST', {
            type: 'world',
        });
    });

    it('should navigate to the story search screen when the search button is pressed', () => {
        const mockNavigation = {
            navigate: jest.fn() as DashboardProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as DashboardProps;

        const {getByText} = _render(<Dashboard {...props} />);
        const searchButton = getByText('Search');

        fireEvent.press(searchButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('STORY_SEARCH');
    });
});
