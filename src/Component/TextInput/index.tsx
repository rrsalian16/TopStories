import React from 'react';
import {
    Icon,
    IconButton,
    TextInput as MuiTextInput,
    TextInputProps,
} from '@react-native-material/core';

type TextInputPropsType = TextInputProps & {
    isPassword?: boolean;
};

const TextInput: React.FC<TextInputPropsType> = (props: TextInputPropsType) => {
    const {isPassword = false, ...rest} = props;

    return (
        <MuiTextInput
            label='Label'
            variant='outlined'
            secureTextEntry={isPassword}
            {...rest}
            trailing={(props) =>
                isPassword && (
                    <IconButton
                        icon={(props) => <Icon name='eye' {...props} />}
                        {...props}
                    />
                )
            }
        />
    );
};

export default TextInput;
