import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Error, Header, Layout} from '@TopStories/Component';
import {useAppDispatch, useAppSelector} from '@TopStories/Hook/redux';
import {StoryListActions} from '.';
import {get} from 'lodash';
import {ActivityIndicator, ListItem} from '@react-native-material/core';

const StoryList = () => {
    const dispatch = useAppDispatch();

    const storyListRes = useAppSelector((state) => state.storyList);

    const data = get(storyListRes, 'data');
    const isLoading = get(storyListRes, 'loading', false);
    const error = get(storyListRes, 'error');

    const onClickButton = () => dispatch(StoryListActions.request());

    useEffect(() => {
        dispatch(StoryListActions.request());
    }, []);

    if (error) return <Error />;
    if (isLoading) return <ActivityIndicator style={style.container} />;

    if (!data?.length)
        return (
            <Layout.Scrollable header={<Header title='Stories' />}>
                <View style={style.container}>
                    <Button onPress={onClickButton} title='Go to list' />
                </View>
            </Layout.Scrollable>
        );

    return (
        <Layout.Scrollable header={<Header title='Stories' />}>
            {data.map(
                ({uri, title}) => title && <ListItem key={uri} title={title} />,
            )}
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
});

export default StoryList;
