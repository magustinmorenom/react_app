import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BoltIcon from '@mui/icons-material/Bolt';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '/Users/agustin/Documents/15 Web Apps/00 React Tests/01 React App Basica/proyectoReact/src/redux/slices/authSlice.jsx'; // Asegúrate de que la ruta sea correcta

export  const MainListItems = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <ListItemButton component={NavLink} to="consumo">
        <ListItemIcon>
          <BoltIcon />
        </ListItemIcon>
        <ListItemText primary="Consumos" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="usuarios">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="reportes">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="mas">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Mas" />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainListItems;
