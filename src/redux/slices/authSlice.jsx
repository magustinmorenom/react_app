import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Importa las funciones necesarias de Redux Toolkit
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

// Crear una acción asíncrona para el login
// createAsyncThunk crea una acción que realiza una operación asíncrona y devuelve una promesa
export const login = createAsyncThunk('auth/login', async (credentials) => {
  // credentials es el parámetro que contiene los datos de inicio de sesión del usuario
  const response = await axios.get('http://localhost:3000/users', {
    params: {
      username: credentials.username, // Usa el nombre de usuario de las credenciales para la solicitud
      password: credentials.password, // Usa la contraseña de las credenciales para la solicitud
    },
  });
  const user = response.data[0]; // Supone que la respuesta es una lista y toma el primer elemento

  // Si no se encuentra el usuario, lanza un error
  if (!user) {
    throw new Error('Authentication failed'); // Lanza un error si la autenticación falla
  }
  return user; // Devuelve el usuario autenticado
});

// Crea una slice de autenticación con createSlice
const authSlice = createSlice({
  name: 'auth', // Nombre de la slice
  initialState: {
    isAuthenticated: false, // Estado inicial de autenticación
    user: null, // Usuario inicial (null significa no autenticado)
    error: null, // Error inicial (null significa sin errores)
  },
  reducers: {
    // Define un reductor (reducer) para el cierre de sesión (logout)
    logout: (state) => {
      state.isAuthenticated = false; // Cambia el estado de autenticación a falso
      state.user = null; // Borra el usuario del estado
    },
  },
  extraReducers: (builder) => {
    // Define reductores adicionales para manejar las acciones asíncronas
    builder
      // Caso de éxito del login
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true; // Cambia el estado de autenticación a verdadero
        state.user = action.payload; // Almacena el usuario autenticado en el estado
        state.error = null; // Resetea cualquier error previo
      })
      // Caso de fallo del login
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message; // Almacena el mensaje de error en el estado
      });
  },
});

// Exporta la acción logout para ser usada en otros lugares
export const { logout } = authSlice.actions;

// Exporta el reducer de la slice para ser incluido en la configuración del store
export default authSlice.reducer;
