import {RegEx} from './RegularExpresion';

export const isEmail = (email: string) => !!email.match(RegEx.EMAIL);

export const isValidPassword = (password: string) =>
    RegEx.PASSWORD.test(password);

export const isPassMatching = (pass = '', confPass = '') => pass === confPass;
