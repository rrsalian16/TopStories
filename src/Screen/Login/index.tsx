import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-native-material/core';

const Login = () => {
    const theme = useTheme();
    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Login</Text>
            </View>
        </>
    );
};

export default Login;
