import {View, Text} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {get} from 'lodash';

type StoryDetailProps = DashbaordStackScreenProp<RouteName.STORY_DETAIL>;

const StoryDetail = (props: StoryDetailProps) => {
    const id = get(props, ['route', 'params', 'id'], null);

    return (
        <View>
            <Text>StoryDetail {id}</Text>
        </View>
    );
};

export default StoryDetail;
