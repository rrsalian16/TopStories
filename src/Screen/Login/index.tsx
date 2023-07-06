import React from 'react';
import {Box, useTheme} from '@react-native-material/core';
import {Header, Layout, TextInput} from '@TopStories/Component';

const Login = () => {
    const theme = useTheme();
    return (
        <Layout.Base
            header={<Header title='Login' centerTitle />}
            footer={<Header title='Login' centerTitle />}>
            <Box h={12} />
            <TextInput />
            <TextInput isPassword />
        </Layout.Base>
    );
};

export default Login;
