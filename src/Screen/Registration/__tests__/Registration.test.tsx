import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import Registration, {RegistrationProps} from '../Registration';
import {_render} from '@TopStories/Utils/testUtils';

describe('Registration screen', () => {
    it('should render the registration screen correctly', () => {
        const mockNavigation = {
            navigate: jest.fn() as RegistrationProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as RegistrationProps;

        const {getByLabelText, getByText} = _render(
            <Registration {...props} />,
        );

        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Password')).toBeTruthy();
        expect(getByLabelText('Confirm Password')).toBeTruthy();

        expect(getByText('Registration')).toBeTruthy();
    });

    it('should enable the registration button when valid email, password, and confirm password are entered', () => {
        const mockNavigation = {
            navigate: jest.fn() as RegistrationProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as RegistrationProps;

        const {getByLabelText, getByText} = _render(
            <Registration {...props} />,
        );

        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');
        const confirmPasswordInput = getByLabelText('Confirm Password');
        const registrationButton = getByText('Registration');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');
        fireEvent.changeText(confirmPasswordInput, 'password123');

        expect(registrationButton.props.disabled).toBe(false);
    });

    it('should disable the registration button when invalid email, password, or confirm password are entered', () => {
        const mockNavigation = {
            navigate: jest.fn() as RegistrationProps['navigation']['navigate'],
        };

        const props = {
            navigation: mockNavigation,
        } as RegistrationProps;

        const {getByLabelText, getByText} = _render(
            <Registration {...props} />,
        );

        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');
        const confirmPasswordInput = getByLabelText('Confirm Password');
        const registrationButton = getByText('Registration');

        fireEvent.changeText(emailInput, 'invalidemail');
        fireEvent.changeText(passwordInput, 'password123');
        fireEvent.changeText(confirmPasswordInput, 'password123');

        expect(registrationButton.props.disabled).toBe(true);

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'short');
        fireEvent.changeText(confirmPasswordInput, 'password123');

        expect(registrationButton.props.disabled).toBe(true);

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');
        fireEvent.changeText(confirmPasswordInput, 'mismatch123');

        expect(registrationButton.props.disabled).toBe(true);
    });
});
