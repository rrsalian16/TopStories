import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {Button, Header, Layout, Text} from '@TopStories/Component';
import {PNG_IMAGE} from '@TopStories/Assets';

export type DashboardProps = DashbaordStackScreenProp<RouteName.DASHBOARD>;

enum StoryTypes {
    SCIENCE = 'science',
    WORLD = 'world',
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
    const {navigation} = props;

    const _onClickCard = (type: string) => {
        navigation.navigate(RouteName.STORY_LIST, {type});
    };

    const _onClickSearch = () => navigation.navigate(RouteName.STORY_SEARCH);

    return (
        <Layout.Base header={<Header title='Dashbaord' hideLeft />}>
            <View style={style.container}>
                <TouchableOpacity
                    testID='science-card'
                    style={style.cardContainer}
                    onPress={() => _onClickCard(StoryTypes.SCIENCE)}>
                    <Image style={style.cardImage} source={PNG_IMAGE.science} />
                    <Text variant='h5' style={style.cardText}>
                        Science
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID='world-card'
                    style={style.cardContainer}
                    onPress={() => _onClickCard(StoryTypes.WORLD)}>
                    <Image style={style.cardImage} source={PNG_IMAGE.world} />
                    <Text variant='h5' style={style.cardText}>
                        World
                    </Text>
                </TouchableOpacity>
                <Button
                    style={style.button}
                    onPress={_onClickSearch}
                    variant='contained'
                    title='Search'
                />
            </View>
        </Layout.Base>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#52232d',
    },
    cardImage: {
        width: 200,
        height: 200,
    },
    cardText: {
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        width: '70%',
    },
});

export default Dashboard;
