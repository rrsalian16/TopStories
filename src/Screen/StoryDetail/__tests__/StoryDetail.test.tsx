import React from 'react';
import StoryDetail, {StoryDetailProps} from '../index';
import {DetailsType} from '@TopStories/Screen/StoryDetail/type';
import {_render} from '@TopStories/Utils/testUtils';

describe('StoryDetail screen', () => {
    it('should render ', () => {
        const props = {
            route: {
                params: {
                    id: 1,
                    from: DetailsType.LIST,
                },
            },
        } as StoryDetailProps;

        _render(<StoryDetail {...props} />);
    });
});
