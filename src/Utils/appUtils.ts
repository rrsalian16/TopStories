import {Dimensions, Linking} from 'react-native';

const {height, width} = Dimensions.get('screen');

const openWebUrl = async (url: string) =>
    (await Linking.canOpenURL(url)) && Linking.openURL(url);

const getTrimedString = (str: string, length: number) =>
    str.length > length ? `${str.substring(0, 45)}...` : str;

export const AppUtils = {
    width,
    height,
    getTrimedString,
    openWebUrl,
};
