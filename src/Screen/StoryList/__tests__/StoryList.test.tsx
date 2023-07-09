import React from 'react';
import StoryList, {StoryListProps} from '../StoryList';
import {_render} from '@TopStories/Utils/testUtils';

describe('StoryList component', () => {
    it('should render ', () => {
        const props = {
            route: {
                params: {
                    type: 'science',
                },
            },
        } as StoryListProps;

        _render(<StoryList {...props} />);
    });
});
