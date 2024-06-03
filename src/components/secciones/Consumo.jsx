import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Consumo() {

  return (
    <div>
      <div><h2>Consumo</h2></div>

      <div>
        <nav>
        <NavLink to='cargar-facturas'>Cargar Facturas</NavLink>
        <NavLink to='listar-facturas'>Listar Facturas</NavLink>
      </nav>
      </div>
     
      <Outlet/>

    </div>


  )
}
