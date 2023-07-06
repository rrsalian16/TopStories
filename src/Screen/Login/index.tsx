import React, {useState} from 'react';
import {Box, Button, Header, Layout, TextInput} from '@TopStories/Component';
import {StyleSheet} from 'react-native';
import {AuthStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';

type LoginProps = AuthStackScreenProp<RouteName.LOGIN>;

const Login: React.FC<LoginProps> = (props: LoginProps) => {
    const {navigation} = props;

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const _onChangeEmail = (email: string) => setUserEmail(email);
    const _onChangePassword = (password: string) => setUserPassword(password);

    const _onClickRegistre = () => navigation.navigate(RouteName.REGISTRATION);

    return (
        <Layout.Base header={<Header title='Login' hideLeft />}>
            <Box h={48} />
            <TextInput
                label='Email'
                value={userEmail}
                onChangeText={_onChangeEmail}
            />
            <Box h={12} />
            <TextInput
                label='Password'
                isPassword
                value={userPassword}
                onChangeText={_onChangePassword}
            />
            <Box h={32} />
            <Button variant='contained' title='login' />
            <Box h={8} />

            <Button
                onPress={_onClickRegistre}
                variant='text'
                title='Not Registred'
            />
        </Layout.Base>
    );
};

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
});

export default Login;
