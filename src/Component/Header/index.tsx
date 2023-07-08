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

type IconProps = {
    color: string;
    size: number;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {isLoggedIn = false, logOut} = useIsLoggedIn();

    const {
        title = '',
        centerTitle = true,
        hideLeft = false,
        hideRight = false,
    } = props;

    console.log('isLoggedIn:Header', isLoggedIn);

    const _hideRight = !(isLoggedIn && !hideRight);

    const leftIcon = (props: IconProps) => {
        if (hideLeft) return <></>;
        return (
            <IconButton
                onPress={RouteService.goBack}
                icon={(props) => <Icon name='arrow-left' {...props} />}
                {...props}
            />
        );
    };

    return (
        <AppBar
            style={style.appBar}
            leading={(props) => leftIcon(props)}
            trailing={(props) =>
                !_hideRight && (
                    <IconButton
                        onPress={() => logOut()}
                        icon={(props) => (
                            <Icon name='logout-variant' {...props} />
                        )}
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
