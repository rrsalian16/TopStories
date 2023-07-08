import React from 'react';
import {BoxProps, Box as MuiBox} from '@react-native-material/core';

const Box: React.FC<BoxProps> = (props: BoxProps) => {
    return <MuiBox {...props} />;
};

export default Box;
