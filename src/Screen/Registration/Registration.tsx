import React from 'react';
import {Box, Button, Header, Layout, TextInput} from '@TopStories/Component';
import {isEmail, isPassMatching, isValidPassword} from '@TopStories/Validation';
import {useForm, useAuth} from '@TopStories/Hook';
import {AuthStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';

type RegistrationProps = AuthStackScreenProp<RouteName.REGISTRATION>;

const Registration: React.FC<RegistrationProps> = (
    props: RegistrationProps,
) => {
    const {navigation} = props;
    const {dispatchRegistration} = useAuth();

    const email = useForm({value: '', validate: isEmail});
    const password = useForm({value: '', validate: isValidPassword});
    const confirmPassword = useForm({value: '', validate: isValidPassword});

    const {isError: isEmailError = false, value: emailValue} = email;
    const {isError: isPasswordError = false, value: passwordValue} = password;
    const {isError: isConfPassError = false, value: confirmPassValue} =
        confirmPassword;

    const disableRegistration =
        !emailValue ||
        isEmailError ||
        !passwordValue ||
        isPasswordError ||
        !confirmPassValue ||
        isConfPassError;

    const _onClickRegister = () =>
        dispatchRegistration({email: emailValue, password: passwordValue});

    return (
        <Layout.Base header={<Header title='Registration' centerTitle />}>
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
                isPassword
                {...password}
            />
            <Box h={12} />
            <TextInput
                errorMsg='Password Not Matching'
                label='Confirm Password'
                isConfirmPassword
                isPassword
                {...confirmPassword}
                isError={
                    isConfPassError ||
                    !isPassMatching(passwordValue, confirmPassValue)
                }
            />
            <Box h={32} />
            <Button
                disabled={disableRegistration}
                onPress={_onClickRegister}
                variant='contained'
                title='Registration'
            />
        </Layout.Base>
    );
};

export default Registration;
