import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './slices/modalSlice';
import authReducer from './slices/userSlices/authSlice';
import addBookReducer from './slices/addBookSlice/addBookSlice';
import profileReducer from './slices/profileSlice/profileSlice';
import resetPasswordReducer from './slices/userSlices/passwordSlice';
import updateUserDataReducer from './slices/userSlices/updateSlice'
import favoriteReducer from './slices/favoriteSlice/favoriteSlice'
import subscriptionsReducer from './slices/subscriptionSlice/subscriptionsSlice'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'resetPassword', ],
};

const rootReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
    addBook: addBookReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
    updateDataUser:updateUserDataReducer,
    favorite: favoriteReducer,
    subscriptions:subscriptionsReducer

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
