import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';

type ErrorBoundryProps = {
    children: JSX.Element;
};

type ErrorBoundryPropsState = {
    error: unknown;
};

export class ErrorBoundry extends Component<
    ErrorBoundryProps,
    ErrorBoundryPropsState
> {
    state = {
        error: null,
    };

    static getDerivedStateFromError(error: unknown) {
        return {error: error};
    }

    componentDidCatch(error: unknown, info: React.ErrorInfo) {
        //Log error
    }

    render() {
        if (this.state.error) {
            return (
                <View style={style.errorContainer}>
                    <Text>Something Went Wrong</Text>
                </View>
            );
        }
        return this.props.children;
    }
}

const style = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ErrorBoundry;
