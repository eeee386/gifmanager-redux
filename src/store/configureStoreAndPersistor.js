import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

export const configureStoreAndPersistor = () => {

        const persistConfig = {
            key: 'root',
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
        let persistor = persistStore(store);
        return {store, persistor}
    };