import React from 'react';
import {Box, Button, Header, Layout, TextInput} from '@TopStories/Component';
import {AuthStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {isEmail, isValidPassword} from '@TopStories/Validation';
import {useForm, useLogin} from '@TopStories/Hook';

type LoginProps = AuthStackScreenProp<RouteName.LOGIN>;

const Login: React.FC<LoginProps> = (props: LoginProps) => {
    const {navigation} = props;

    const {setLoggedIn} = useLogin();

    const email = useForm({value: '', validate: isEmail});
    const password = useForm({value: '', validate: isValidPassword});

    const {isError: isEmailError = false, value: emailValue} = email;
    const {isError: isPasswordError = false, value: passwordValue} = password;

    const isLoginDisabled =
        !emailValue || isEmailError || !passwordValue || isPasswordError;

    const _onClickRegistre = () => navigation.navigate(RouteName.REGISTRATION);
    const _onClickLogin = () =>
        setLoggedIn({email: emailValue, password: passwordValue});

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
                label='Password'
                {...password}
            />
            <Box h={32} />
            <Button
                disabled={isLoginDisabled}
                onPress={_onClickLogin}
                variant='contained'
                title='login'
            />
            <Box h={8} />

            <Button
                onPress={_onClickRegistre}
                variant='text'
                title='Not Registred'
            />
        </Layout.Base>
    );
};

export default Login;
