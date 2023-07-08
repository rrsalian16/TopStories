import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['search'], // Array of reducers to persist
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const isDevEnv = __DEV__;

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false, // Ignore non-serializable actions
        }),
        sagaMiddleware,
        logger,
    ],
    devTools: isDevEnv,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
