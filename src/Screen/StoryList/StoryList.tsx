import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Layout} from '@TopStories/Component';
import {useAppDispatch, useAppSelector} from '@TopStories/Hook/redux';
import {StoryListActions} from '.';
import {get} from 'lodash';
import {ActivityIndicator} from '@react-native-material/core';

const StoryList = () => {
    const dispatch = useAppDispatch();

    const storyListRes = useAppSelector((state) => state.storyList);

    const data = get(storyListRes, 'data');
    const isLoading = get(storyListRes, 'loading', false);
    const error = get(storyListRes, 'error');

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    const onClickButton = () => dispatch(StoryListActions.request());

    /*  useEffect(() => {
        dispatch(StoryListActions.request());
    }, []); */

    if (isLoading) return <ActivityIndicator style={style.container} />;

    return (
        <Layout.Base header={<Header title='Stories' />}>
            <View style={style.container}>
                <Button onPress={onClickButton} title='Go to Details' />
            </View>
        </Layout.Base>
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
