import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const getTrimedString = (str: string, length: number) =>
    str.length > length ? `${str.substring(0, 45)}...` : str;

export const AppUtils = {
    width,
    height,
    getTrimedString,
};
