import {combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import modalReducer from './slices/modalSlice';
import authReducer from './slices/authSlice'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}



const rootReducer = combineReducers({
    modal:modalReducer,
    auth:authReducer,

})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;