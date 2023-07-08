import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {get} from 'lodash';
import {Header, Layout, Text} from '@TopStories/Component';
import {useAppSelector} from '@TopStories/Hook/redux';
import {StoryType} from '../StoryList';
import {AppUtils} from '@TopStories/Utils';
import {DetailsType} from './type';
import {getStoryDetails} from './utils';

const IMAGE_BASE_URL = 'https://www.nytimes.com/';

type StoryDetailProps = DashbaordStackScreenProp<RouteName.STORY_DETAIL>;
const DATE_FORMATE = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
} as Intl.DateTimeFormatOptions;

const StoryDetail = (props: StoryDetailProps) => {
    const id = get(props, ['route', 'params', 'id']) as number;
    const from = get(props, ['route', 'params', 'from']) as DetailsType;

    const storsyList = useAppSelector(
        (state) => state.storyList.data,
    ) as StoryType[];
    const storsySearchList = useAppSelector((state) => state.search.data);

    const listStory = storsyList && storsyList[id];
    const searchStory = storsySearchList?.docs[id];

    const {title, multimedia, abstract, section, url, byline, published_date} =
        getStoryDetails(from, listStory, searchStory);
    const _onClickLInk = (url: string) => AppUtils.openWebUrl(url);

    const _published_date = new Date(`${published_date}`).toLocaleDateString(
        'en-us',
        DATE_FORMATE,
    );

    const imageUrl = multimedia && multimedia[0]?.url;
    const multiMediaUrl =
        from === DetailsType.LIST ? imageUrl : `${IMAGE_BASE_URL}${imageUrl}`;

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
                {imageUrl && (
                    <Image style={style.image} source={{uri: multiMediaUrl}} />
                )}
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
    date: {
        marginBottom: 10,
    },
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
