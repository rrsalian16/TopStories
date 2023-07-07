import React from 'react';
import {AppBar, Icon, IconButton} from '@react-native-material/core';
import {StyleSheet} from 'react-native';
import {RouteService} from '@TopStories/Routes';
import {useIsLoggedIn} from '@TopStories/Hook';

type HeaderProps = {
    title?: string;
    centerTitle?: boolean;
    hideLeft?: boolean;
    hideRight?: boolean;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {isLoggedIn = false, logOut} = useIsLoggedIn();

    const {
        title = '',
        centerTitle = true,
        hideLeft = false,
        hideRight = false,
    } = props;

    const _hideRight = !(isLoggedIn && !hideRight);

    return (
        <AppBar
            style={style.appBar}
            leading={(props) => (
                <IconButton
                    onPress={RouteService.goBack}
                    icon={(props) =>
                        !hideLeft && <Icon name='arrow-left' {...props} />
                    }
                    {...props}
                />
            )}
            trailing={(props) => (
                <IconButton
                    onPress={() => logOut()}
                    icon={(props) =>
                        !_hideRight && <Icon name='logout-variant' {...props} />
                    }
                    {...props}
                />
            )}
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
