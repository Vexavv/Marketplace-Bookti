import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import './i18n'
import {Provider} from 'react-redux';
import store,{persistor} from './store';
import {PersistGate} from "redux-persist/integration/react";
import {GoogleOAuthProvider} from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_ID}>
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>,
        </PersistGate>
    </Provider>
)
