import React, {useState} from 'react';
import {Box, Button, Header, Layout, TextInput} from '@TopStories/Component';

const Registration = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const _onChangeEmail = (email: string) => setUserEmail(email);
    const _onChangePassword = (password: string) => setUserPassword(password);
    const _onChangeConfPassword = (confPassword: string) =>
        setConfirmPassword(confPassword);

    return (
        <Layout.Base header={<Header title='Registration' centerTitle />}>
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
            <Box h={12} />
            <TextInput
                label='Confirm Password'
                isConfirmPassword
                isPassword
                value={confirmPassword}
                onChangeText={_onChangeConfPassword}
            />
            <Box h={32} />
            <Button variant='contained' title='Registration' />
        </Layout.Base>
    );
};

export default Registration;
