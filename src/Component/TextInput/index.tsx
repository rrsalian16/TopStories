import React, {useState} from 'react';
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
    const [isSecure, setIsSecure] = useState(true);
    const {isPassword = false, ...rest} = props;

    const onPressIcon = () => setIsSecure((prv) => !prv);

    return (
        <MuiTextInput
            label='Label'
            variant='outlined'
            secureTextEntry={isSecure && isPassword}
            {...rest}
            trailing={(props) =>
                isPassword && (
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
                )
            }
        />
    );
};

export default TextInput;
