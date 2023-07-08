import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {Header, Layout, Text} from '@TopStories/Component';
import {PNG_IMAGE} from '@TopStories/Assets';

type DashboardProps = DashbaordStackScreenProp<RouteName.DASHBOARD>;

enum StoryTypes {
    SCIENCE = 'science',
    WORLD = 'world',
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
    const {navigation} = props;

    const _onClickCard = (type: string) => {
        navigation.navigate(RouteName.STORY_LIST, {type});
    };

    return (
        <Layout.Base header={<Header title='Dashbaord' hideLeft />}>
            <View style={style.container}>
                <TouchableOpacity
                    style={style.cardContainer}
                    onPress={() => _onClickCard(StoryTypes.SCIENCE)}>
                    <Image style={style.cardImage} source={PNG_IMAGE.science} />
                    <Text variant='h5' style={style.cardText}>
                        Science
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.cardContainer}
                    onPress={() => _onClickCard(StoryTypes.WORLD)}>
                    <Image style={style.cardImage} source={PNG_IMAGE.world} />
                    <Text variant='h5' style={style.cardText}>
                        World
                    </Text>
                </TouchableOpacity>
            </View>
        </Layout.Base>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#52232d',
    },
    cardImage: {
        width: 250,
        height: 250,
    },
    cardText: {
        textAlign: 'center',
    },
});

export default Dashboard;
