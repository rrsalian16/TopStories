import {
    SafeAreaView,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    KeyboardAvoidingViewProps,
    View,
    ScrollView,
} from 'react-native';
import React from 'react';

type ScrollableProps = {
    header?: React.ReactNode;
    keyboardAvoidingProps?: KeyboardAvoidingViewProps;
    footer?: React.ReactNode;
    showScrollViewIndicator?: boolean;
    children?: React.ReactNode;
};

const Scrollable: React.FC<ScrollableProps> = (props: ScrollableProps) => {
    const {
        header = null,
        footer = null,
        keyboardAvoidingProps = {},
        children = null,
        showScrollViewIndicator = false,
    } = props;

    const defaultKeyboardAvoidingProps = {
        behavior: 'padding',
        keyboardVerticalOffset: Platform.select({ios: 0, android: 20}),
        style: {flex: 1},
        ...keyboardAvoidingProps,
    } as KeyboardAvoidingViewProps;

    return (
        <>
            <SafeAreaView style={style.safeArea} />
            <SafeAreaView style={style.safeAreaView}>
                {header}
                <KeyboardAvoidingView
                    style={style.keyboardAvoid}
                    {...defaultKeyboardAvoidingProps}>
                    <ScrollView
                        scrollEventThrottle={0}
                        showsVerticalScrollIndicator={showScrollViewIndicator}
                        contentContainerStyle={style.scrollViewContainer}>
                        <View style={style.appBody}>{children}</View>
                    </ScrollView>
                    {footer}
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
};

const style = StyleSheet.create({
    safeArea: {
        backgroundColor: '#52232d',
    },
    safeAreaView: {
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
    scrollViewContainer: {flex: 1},
});

export default Scrollable;
