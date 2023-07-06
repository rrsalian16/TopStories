import React, {useState} from 'react';
import {Box, Button, Header, Layout, TextInput} from '@TopStories/Component';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const _onChangeEmail = (email: string) => setUserEmail(email);
    const _onChangePassword = (password: string) => setUserPassword(password);

    return (
        <Layout.Base
            header={<Header title='Login' centerTitle />}
            footer={<Header title='Login' centerTitle />}>
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
        </Layout.Base>
    );
};

export default Login;
