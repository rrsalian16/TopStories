import React, {useState} from 'react';
import {
    Icon,
    IconButton,
    TextInput as MuiTextInput,
    TextInputProps,
} from '@react-native-material/core';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';

type TextInputPropsType = TextInputProps & {
    isPassword?: boolean;
    isConfirmPassword?: boolean;
    errorMsg?: string;
    isError?: boolean;
};

type PasswordEyeIconProp = {
    color: string;
    size: number;
};

const TextInput: React.FC<TextInputPropsType> = (props: TextInputPropsType) => {
    const [isSecure, setIsSecure] = useState(true);
    const {
        isPassword = false,
        isConfirmPassword = false,
        isError = false,
        errorMsg = '',
        ...rest
    } = props;

    const onPressIcon = () => setIsSecure((prv) => !prv);
    const showError = isError && errorMsg;

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
        <View>
            <MuiTextInput
                label='Label'
                variant='outlined'
                secureTextEntry={isSecure && (isPassword || isConfirmPassword)}
                {...rest}
                trailing={(props) =>
                    isPassword && !isConfirmPassword && passwordEyeIcon(props)
                }
            />
            {showError && <Text style={style.text}>{errorMsg}</Text>}
        </View>
    );
};

const style = StyleSheet.create({
    text: {
        textAlign: 'left',
        color: 'red',
    },
});

export default TextInput;
