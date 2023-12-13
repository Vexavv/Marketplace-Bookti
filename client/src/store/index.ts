import {combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import todoReducer from './slices/todoSlice';
import modalReducer from './slices/modalSlice';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos']
}



const rootReducer = combineReducers({
    todos: todoReducer,
    modal:modalReducer,
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