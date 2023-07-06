import React from 'react';
import {
    Box,
    Button,
    Header,
    Layout,
    Loader,
    TextInput,
} from '@TopStories/Component';
import {AuthStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {isEmail, isValidPassword} from '@TopStories/Validation';
import {useAuth, useForm} from '@TopStories/Hook';
import {get} from 'lodash';
import {Text} from '@react-native-material/core';
import {StyleSheet} from 'react-native';

type LoginProps = AuthStackScreenProp<RouteName.LOGIN>;

const Login: React.FC<LoginProps> = (props: LoginProps) => {
    const {navigation} = props;

    const {loginData, dispatchLogin} = useAuth();

    const data = get(loginData, ['data']);
    const error = get(loginData, ['error']);
    const isLoading = get(loginData, ['loading'], false);

    console.log('====================================');
    console.log(data);
    console.log(error);
    console.log(isLoading);
    console.log('====================================');

    const errorMsg = get(error, ['response', 'data', 'message']);

    const email = useForm({value: '', validate: isEmail});
    const password = useForm({value: '', validate: isValidPassword});

    const {isError: isEmailError = false, value: emailValue} = email;
    const {isError: isPasswordError = false, value: passwordValue} = password;

    const isLoginDisabled =
        !emailValue || isEmailError || !passwordValue || isPasswordError;

    const _onClickRegistre = () => navigation.navigate(RouteName.REGISTRATION);
    const _onClickLogin = () =>
        dispatchLogin({email: emailValue, password: passwordValue});

    if (isLoading) <Loader />;

    return (
        <Layout.Base header={<Header title='Login' hideLeft />}>
            <Box h={48} />
            <TextInput
                errorMsg='Invalid Email'
                keyboardType='email-address'
                label='Email'
                {...email}
            />
            <Box h={12} />
            <TextInput
                errorMsg='Invalid Password'
                isPassword
                label='Password'
                {...password}
            />
            <Box h={32} />
            <Button
                // disabled={isLoginDisabled}
                onPress={_onClickLogin}
                variant='contained'
                title='login'
            />
            <Box h={8} />
            {errorMsg && <Text style={style.error}>{errorMsg}</Text>}

            <Button
                onPress={_onClickRegistre}
                variant='text'
                title='Not Registred'
            />
        </Layout.Base>
    );
};

const style = StyleSheet.create({
    error: {
        color: 'red',
        textAlign: 'center',
    },
});

export default Login;
