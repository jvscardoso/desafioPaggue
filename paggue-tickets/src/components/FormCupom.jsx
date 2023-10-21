import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, InputAdornment } from '@mui/material';

const tiposDeEvento = ['Concerto', 'Festival', 'Conferência', 'Outro'];

const FormCupom = () => {
    const [cupom, setCupom] = useState({
        titulo: '',
        porcentagem: '',
        dataValidade: '',
    });

    const handleChange = (prop) => (event) => {
        setCupom({ ...cupom, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para lidar com o envio do formulário
        console.log('Evento enviado:', cupom);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="CUPOM"
                        variant="outlined"
                        value={cupom.titulo}
                        onChange={handleChange('titulo')}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Porcentagem"
                        variant="outlined"
                        value={cupom.porcentagem}
                        onChange={handleChange('porcentagem')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Válido até"
                        type="date"
                        variant="outlined"
                        value={cupom.dataValidade}
                        onChange={handleChange('dataValidade')}
                        InputLabelProps={{
                            shrink: true,
                        }}
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

export default FormCupom;
