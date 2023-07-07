import {View, StyleSheet} from 'react-native';
import React from 'react';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {Button, Header, Layout} from '@TopStories/Component';

type DashboardProps = DashbaordStackScreenProp<RouteName.DASHBOARD>;

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
    const {navigation} = props;

    const _onClickButton = () => {
        navigation.navigate(RouteName.STORY_LIST);
    };

    return (
        <Layout.Base header={<Header title='Dashbaord' />}>
            <View style={style.container}>
                <Button title='Go to List' onPress={_onClickButton} />
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

export default Dashboard;
