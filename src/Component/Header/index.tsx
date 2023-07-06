import React from 'react';
import {AppBar} from '@react-native-material/core';
import {StyleSheet} from 'react-native';

type HeaderProps = {
    title?: string;
    centerTitle?: boolean;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {title = '', centerTitle = false} = props;
    return (
        <AppBar style={style.appBar} title={title} centerTitle={centerTitle} />
    );
};

const style = StyleSheet.create({
    appBar: {},
});

export default Header;
