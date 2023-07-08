/* eslint-disable @typescript-eslint/ban-ts-comment */
import Setup from '@TopStories/Setup';
import React from 'react';
import {persistor, store} from '@TopStories/Store';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {IconComponentProvider} from '@react-native-material/core';

//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {ErrorBoundry} from '@TopStories/Component';

const App: React.FC = () => {
    return (
        <ErrorBoundry>
            <StoreProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {/* @ts-ignore */}
                    <IconComponentProvider
                        IconComponent={MaterialCommunityIcons}>
                        <Setup />
                    </IconComponentProvider>
                </PersistGate>
            </StoreProvider>
        </ErrorBoundry>
    );
};

export default App;
