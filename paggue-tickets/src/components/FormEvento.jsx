import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, InputAdornment } from '@mui/material';

const tiposDeEvento = ['Concerto', 'Festival', 'Conferência', 'Outro'];

const FormEvento = () => {
  const [evento, setEvento] = useState({
    titulo: '',
    imagem: '',
    data: '',
    hora: '',
    tipoEvento: '',
    ingressosDisponiveis: '',
    valorIngresso: '',
    tipoIngresso: ''
  });

  const handleChange = (prop) => (event) => {
    setEvento({ ...evento, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
    console.log('Evento enviado:', evento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Título"
            variant="outlined"
            value={evento.titulo}
            onChange={handleChange('titulo')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Imagem URL"
            variant="outlined"
            value={evento.imagem}
            onChange={handleChange('imagem')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Data"
            type="date"
            variant="outlined"
            value={evento.data}
            onChange={handleChange('data')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Hora"
            type="time"
            variant="outlined"
            value={evento.hora}
            onChange={handleChange('hora')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Tipo de Evento"
            variant="outlined"
            select
            value={evento.tipoEvento}
            onChange={handleChange('tipoEvento')}
          >
            {tiposDeEvento.map((tipo) => (
              <MenuItem key={tipo} value={tipo}>
                {tipo}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Ingressos Disponíveis"
            variant="outlined"
            type="number"
            value={evento.ingressosDisponiveis}
            onChange={handleChange('ingressosDisponiveis')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Valor do Ingresso"
            variant="outlined"
            type="number"
            value={evento.valorIngresso}
            onChange={handleChange('valorIngresso')}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Tipo do Ingresso"
            variant="outlined"
            value={evento.tipoIngresso}
            onChange={handleChange('tipoIngresso')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormEvento;
