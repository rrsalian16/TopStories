import {useState} from 'react';

type UseFormProp<T> = {
    value: T;
    validate?: (v: T) => boolean;
};

const useForm = <T>(props: UseFormProp<T>) => {
    const {value, validate} = props;

    const [_value, setValue] = useState<T>(value);
    const [isValid, setIsValid] = useState(true);

    const checkValidataion = (text: T) =>
        text && validate && setIsValid(validate(text));

    const onChangeText = (text: T) => {
        checkValidataion(text);
        setValue(text);
    };

    const onEndEditing = () => {
        _value && checkValidataion(_value);
    };

    const isError = !!(!isValid && _value);

    return {value: _value, isValid, isError, onChangeText, onEndEditing};
};

export default useForm;
