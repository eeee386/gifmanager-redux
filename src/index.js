import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {configureStoreAndPersistor} from "./store/configureStoreAndPersistor";
import {PersistGate} from 'redux-persist/integration/react';

const store = configureStoreAndPersistor().store;
const persistor = configureStoreAndPersistor().persistor;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
