import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Error, Header, Layout, Text} from '@TopStories/Component';
import {useAppDispatch, useAppSelector} from '@TopStories/Hook/redux';
import {StoryListActions} from '.';
import {capitalize, get} from 'lodash';
import {ActivityIndicator, ListItem} from '@react-native-material/core';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {AppUtils} from '@TopStories/Utils';

type StoryListProps = DashbaordStackScreenProp<RouteName.STORY_LIST>;
const TITLE_LIMIT = 50;

const StoryList: React.FC<StoryListProps> = (props: StoryListProps) => {
    const {navigation} = props;
    const storyType = get(props, ['route', 'params', 'type'], '');
    const dispatch = useAppDispatch();

    const storyListRes = useAppSelector((state) => state.storyList);

    const data = get(storyListRes, 'data');
    const isLoading = get(storyListRes, 'loading', false);
    const error = get(storyListRes, 'error');

    useEffect(() => {
        dispatch(StoryListActions.request({type: storyType}));
    }, [storyType]);

    const _onClickListItem = (id: number) =>
        navigation.navigate(RouteName.STORY_DETAIL, {id});

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

    const _renderStoryList = () =>
        data.map(({uri, title, multimedia, section}, index) => {
            const _title = AppUtils.getTrimedString(title, TITLE_LIMIT);
            const leading = multimedia && multimedia[0]?.url;
            const leadingImage = getLeadingImage(leading);

            return (
                title && (
                    <View style={style.listStyle} key={uri}>
                        <ListItem
                            onPress={() => _onClickListItem(index)}
                            leadingMode='image'
                            leading={leadingImage}
                            overline={section}
                            title={_title}
                        />
                    </View>
                )
            );
        });

    return (
        <Layout.Scrollable
            header={<Header title={`Stories : ${capitalize(storyType)}`} />}>
            {!data && error && <Error />}
            {_renderStoryList()}
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
        borderRadius: 10,
    },
    listImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 3,
    },
});

export default StoryList;
