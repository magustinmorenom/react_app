import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [actividad, setActividad] = useState('');
  const [fecha, setFecha] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!nombre.trim()) {
      setErrores((prevErrores) => ({ ...prevErrores, nombre: 'El nombre es requerido' }));
      return;
    }

    if (!actividad.trim()) {
      setErrores((prevErrores) => ({ ...prevErrores, actividad: 'La actividad es requerida' }));
      return;
    }

    if (!fecha) {
      setErrores((prevErrores) => ({ ...prevErrores, fecha: 'La fecha es requerida' }));
      return;
    }

    // Aquí deberías enviar los datos al backend
    console.log('Nombre:', nombre);
    console.log('Actividad:', actividad);
    console.log('Fecha:', fecha);

    // Limpiar los campos después del envío exitoso
    setNombre('');
    setActividad('');
    setFecha('');
    setErrores({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            error={errores.nombre ? true : false}
            helperText={errores.nombre}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Actividad"
            variant="outlined"
            fullWidth
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
            error={errores.actividad ? true : false}
            helperText={errores.actividad}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Fecha"
            type="date"
            variant="outlined"
            fullWidth
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            error={errores.fecha ? true : false}
            helperText={errores.fecha}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Formulario;
