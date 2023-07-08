import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Error, Header, Layout} from '@TopStories/Component';
import {useAppDispatch, useAppSelector} from '@TopStories/Hook/redux';
import {StoryListActions} from '.';
import {capitalize, get} from 'lodash';
import {ActivityIndicator, ListItem} from '@react-native-material/core';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import Text from '@TopStories/Component/Text';
import {AppUtils} from '@TopStories/Utils';

type StoryListProps = DashbaordStackScreenProp<RouteName.STORY_LIST>;
const TITLE_LIMIT = 50;

const StoryList: React.FC<StoryListProps> = (props: StoryListProps) => {
    const storyType = get(props, ['route', 'params', 'type'], '');
    const dispatch = useAppDispatch();

    const storyListRes = useAppSelector((state) => state.storyList);

    const data = get(storyListRes, 'data');
    const isLoading = get(storyListRes, 'loading', false);
    const error = get(storyListRes, 'error');

    useEffect(() => {
        dispatch(StoryListActions.request({type: storyType}));
    }, [storyType]);

    if (error) return <Error />;
    if (isLoading) return <ActivityIndicator style={style.container} />;

    if (!data?.length)
        return (
            <Layout.Scrollable
                header={
                    <Header title={`Stories : ${capitalize(storyType)}`} />
                }>
                <View style={style.container}>
                    <Text>No Stories</Text>
                </View>
            </Layout.Scrollable>
        );

    const getLeadingImage = (uri: string) => {
        if (!uri) return;
        return (
            <Image
                style={style.listImage}
                source={{
                    uri,
                }}
            />
        );
    };

    return (
        <Layout.Scrollable
            header={<Header title={`Stories : ${capitalize(storyType)}`} />}>
            {data.map(({uri, title, multimedia, section}) => {
                const _title = AppUtils.getTrimedString(title, TITLE_LIMIT);
                const leading = multimedia && multimedia[0]?.url;
                const leadingImage = getLeadingImage(leading);

                return (
                    title && (
                        <View style={style.listStyle} key={uri}>
                            <ListItem
                                leadingMode='image'
                                leading={leadingImage}
                                overline={section}
                                title={_title}
                            />
                        </View>
                    )
                );
            })}
        </Layout.Scrollable>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listStyle: {
        marginVertical: 5,
    },
    listImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default StoryList;
