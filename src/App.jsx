import React from 'react';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}  from 'react-router-dom'

//Layouts
import Dashboard from './components/dashboard/Dashboard';
import Usuarios from './components/secciones/Usuarios';
import Consumo from './components/secciones/Consumo';
import Mas from './components/secciones/Mas';
import Reportes from './components/secciones/Reportes';
import ListarFacturas from './components/secciones/Layouts Consumos/ListarFacturas';

import './App.css';
import CargarFacturas from './components/secciones/Layouts Consumos/CargarFacturas';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard/>}>
    
      <Route path="consumo" element={<Consumo/>} >
        <Route path="cargar-facturas" element={<CargarFacturas/>}/>
        <Route path="listar-facturas" element={<ListarFacturas/>}/>
      </Route>

      <Route path="usuarios" element={<Usuarios />} />
      <Route path="reportes" element={<Reportes />} />
      <Route path="mas" element={<Mas />} />
    </Route>

  )
)

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

