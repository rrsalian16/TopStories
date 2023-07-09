import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import Login, {LoginProps} from '../Login';
import {_render} from '@TopStories/Utils/testUtils';
import {RouteName} from '@TopStories/Routes/routeName';

describe('Login screen', () => {
    it('should render the login screen correctly', () => {
        const mockNavigation = {
            navigate: jest.fn() as LoginProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as LoginProps;

        const {getByLabelText, getByText} = _render(<Login {...props} />);

        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Password')).toBeTruthy();

        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Not Registred')).toBeTruthy();
    });

    it('should enable the login button when valid email and password are entered', () => {
        const mockNavigation = {
            navigate: jest.fn() as LoginProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as LoginProps;
        const {getByLabelText, getByText} = _render(<Login {...props} />);

        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');
        const loginButton = getByText('Login');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        expect(loginButton.props.disabled).toBe(false);
    });

    it('should navigate to the registration screen when registration button is pressed', () => {
        const mockNavigation = {
            navigate: jest.fn() as LoginProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as LoginProps;

        const {getByText} = _render(<Login {...props} />);
        const registrationButton = getByText('Not Registred');

        fireEvent.press(registrationButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith(
            RouteName.REGISTRATION,
        );
    });
});
