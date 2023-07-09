import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import StorySearch, {StorySearchProps} from '../StorySearch';

describe('StorySearch component', () => {
    it('should render the search input correctly', () => {
        const props = {} as StorySearchProps;

        const {getByLabelText} = render(<StorySearch {...props} />);
        const searchInput = getByLabelText('Search');

        expect(searchInput).toBeTruthy();
    });

    it('should update the search value when the user enters text', () => {
        const props = {} as StorySearchProps;
        const {getByLabelText} = render(<StorySearch {...props} />);
        const searchInput = getByLabelText('Search');

        fireEvent.changeText(searchInput, 'Science');

        expect(searchInput.props.value).toBe('Science');
    });

    it('should display search history banners when there is search history', () => {
        const props = {} as StorySearchProps;
        const {getByTestId} = render(<StorySearch {...props} />);
        const searchHistoryBannerContainer = getByTestId(
            'search-history-banner-container',
        );

        expect(searchHistoryBannerContainer).toBeTruthy();
    });

    it('should update the search value when a search history banner is pressed', () => {
        const props = {} as StorySearchProps;
        const {getByText, getByLabelText} = render(<StorySearch {...props} />);
        const searchInput = getByLabelText('Search');
        const searchHistoryBanner = getByText('Science');

        fireEvent.press(searchHistoryBanner);

        expect(searchInput.props.value).toBe('Science');
    });
});
