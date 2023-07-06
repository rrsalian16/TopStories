import React, {useState} from 'react';
import {
    Icon,
    IconButton,
    TextInput as MuiTextInput,
    TextInputProps,
} from '@react-native-material/core';

type TextInputPropsType = TextInputProps & {
    isPassword?: boolean;
    isConfirmPassword?: boolean;
};

type PasswordEyeIconProp = {
    color: string;
    size: number;
};

const TextInput: React.FC<TextInputPropsType> = (props: TextInputPropsType) => {
    const [isSecure, setIsSecure] = useState(true);
    const {isPassword = false, isConfirmPassword = false, ...rest} = props;

    const onPressIcon = () => setIsSecure((prv) => !prv);

    const passwordEyeIcon = (props: PasswordEyeIconProp) => (
        <IconButton
            onPress={onPressIcon}
            icon={(props) => (
                <Icon
                    name={`${isSecure ? 'eye' : 'eye-off-outline'}`}
                    {...props}
                />
            )}
            {...props}
        />
    );

    return (
        <MuiTextInput
            label='Label'
            variant='outlined'
            secureTextEntry={isSecure && isPassword}
            {...rest}
            trailing={(props) =>
                isPassword && !isConfirmPassword && passwordEyeIcon(props)
            }
        />
    );
};

export default TextInput;
