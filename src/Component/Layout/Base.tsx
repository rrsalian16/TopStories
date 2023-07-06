import {
    SafeAreaView,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    KeyboardAvoidingViewProps,
    View,
} from 'react-native';
import React from 'react';

type BaseProps = {
    header?: React.ReactNode;
    keyboardAvoidingProps?: KeyboardAvoidingViewProps;
    footer?: React.ReactNode;
    children?: React.ReactNode;
};

const Base: React.FC<BaseProps> = (props: BaseProps) => {
    const {
        header = null,
        footer = null,
        keyboardAvoidingProps = {},
        children = null,
    } = props;

    const defaultKeyboardAvoidingProps = {
        behavior: 'padding',
        keyboardVerticalOffset: Platform.select({ios: 0, android: 20}),
        style: {flex: 1},
        ...keyboardAvoidingProps,
    } as KeyboardAvoidingViewProps;

    return (
        <SafeAreaView style={style.safeArea}>
            <KeyboardAvoidingView
                style={style.keyboardAvoid}
                {...defaultKeyboardAvoidingProps}>
                {header}
                <View style={style.appBody}>{children}</View>
            </KeyboardAvoidingView>
            {footer}
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    keyboardAvoid: {
        flex: 1,
    },
    appBody: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexGrow: 1,
    },
});

export default Base;
