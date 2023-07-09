/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {render} from '@TopStories/Utils/testUtils';
import {Provider} from 'react-redux';
import {store, persistor} from '@TopStories/Store';
import {PersistGate} from 'redux-persist/integration/react';
// re-export everything
export * from '@testing-library/react-native';
import {IconComponentProvider} from '@react-native-material/core';

//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export const _render = (component: JSX.Element) =>
    render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* @ts-ignore */}
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    {component}
                </IconComponentProvider>
            </PersistGate>
        </Provider>,
    );
