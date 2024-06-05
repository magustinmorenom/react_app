import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice'; // Importa el nuevo reducer

// Configuración de persistencia para el authReducer
const authPersistConfig = {
  key: 'auth',
  storage,
};

// Combina múltiples reducers en uno solo, pero solo el authReducer será persistido
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Solo este reducer será persistido
  counter: counterReducer, // Este reducer no será persistido
});

// Configura la tienda de Redux utilizando el reducer combinado
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Configura el persistor para manejar la persistencia del estado de autenticación
export const persistor = persistStore(store);
