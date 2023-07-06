import {Text as MuiText, TextProps} from '@react-native-material/core';
import React from 'react';

const Text: React.FC<TextProps> = (props: TextProps) => {
    const {children, ...rest} = props;
    return <MuiText {...rest}>{children}</MuiText>;
};

export default Text;
