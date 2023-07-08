import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {get} from 'lodash';
import {Header, Layout, Text} from '@TopStories/Component';
import {useAppSelector} from '@TopStories/Hook/redux';
import {StoryType} from '../StoryList';
import {AppUtils} from '@TopStories/Utils';

type StoryDetailProps = DashbaordStackScreenProp<RouteName.STORY_DETAIL>;
const DATE_FORMATE = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
} as Intl.DateTimeFormatOptions;

const StoryDetail = (props: StoryDetailProps) => {
    const id = get(props, ['route', 'params', 'id']) as number;

    const storsyList = useAppSelector((state) => state.storyList.data);
    const story = (storsyList && storsyList[id]) as StoryType;

    const {title, multimedia, abstract, section, url, byline, published_date} =
        story;
    const _onClickLInk = (url: string) => AppUtils.openWebUrl(url);

    const _published_date = new Date(published_date).toLocaleDateString(
        'en-us',
        DATE_FORMATE,
    );

    return (
        <Layout.Scrollable header={<Header title='' />}>
            <View style={style.container}>
                <Text style={style.sectionText} variant='overline'>
                    {section}
                </Text>
                <Text style={style.title} variant='subtitle1'>
                    {title}
                </Text>
                <Text style={style.byText} variant='overline'>
                    {byline}
                </Text>
                <Text style={style.date} variant='overline'>
                    {_published_date}
                </Text>
                <Image style={style.image} source={{uri: multimedia[0].url}} />
                <Text variant='body2'>{abstract}</Text>
                <Text
                    style={style.link}
                    variant='overline'
                    onPress={() => _onClickLInk(url)}>
                    Link
                </Text>
            </View>
        </Layout.Scrollable>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '700',
    },
    sectionText: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 5,
    },
    byText: {
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 5,
    },
    date: {},
    image: {
        resizeMode: 'stretch',
        marginVertical: 20,
        marginTop: 30,
        width: '100%',
        height: 200,
    },
    link: {
        fontSize: 12,
        fontWeight: '700',
        marginVertical: 20,
        color: 'blue',
    },
});

export default StoryDetail;
