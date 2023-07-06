import React from 'react';
import {AppBar, Icon, IconButton} from '@react-native-material/core';
import {StyleSheet} from 'react-native';
import {RouteService} from '@TopStories/Routes';

type HeaderProps = {
    title?: string;
    centerTitle?: boolean;
    hideLeft?: boolean;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {title = '', centerTitle = true, hideLeft = false} = props;
    return (
        <AppBar
            style={style.appBar}
            leading={(props) =>
                !hideLeft && (
                    <IconButton
                        onPress={RouteService.goBack}
                        icon={(props) => <Icon name='arrow-left' {...props} />}
                        {...props}
                    />
                )
            }
            title={title}
            centerTitle={centerTitle}
        />
    );
};

const style = StyleSheet.create({
    appBar: {
        backgroundColor: '#52232d',
    },
});

export default Header;
