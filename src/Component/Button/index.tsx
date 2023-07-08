import React from 'react';
import {ButtonProps, Button as MuiButton} from '@react-native-material/core';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <MuiButton color='#52232d' {...props} />;
};

export default Button;
