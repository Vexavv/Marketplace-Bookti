import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './slices/modalSlice';
import authReducer from './slices/authSlice';
import addBookReducer from './slices/addBookSlice';
import profileReducer from './slices/profileSlice/profileSlice';
import resetPasswordReducer from './slices/passwordSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'resetPassword'],
};

const rootReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
    addBook: addBookReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
