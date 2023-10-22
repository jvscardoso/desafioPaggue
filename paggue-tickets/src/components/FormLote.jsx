import React, { useState } from 'react';
import { TextField, Button, Grid} from '@mui/material';

const FormLote = () => {
    const [lote, setLote] = useState({
        loteNome: '',
        loteIngresso: '',
        loteValidade: '',
    });

    const handleChange = (prop) => (event) => {
        setLote({ ...lote, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Evento enviado:', lote);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nome do lote"
                        variant="outlined"
                        value={lote.loteNome}
                        onChange={handleChange('loteNome')}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Quantidade de ingressos por lote"
                        variant="outlined"
                        value={lote.loteIngresso}
                        onChange={handleChange('loteIngresso')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Válido até"
                        type="date"
                        variant="outlined"
                        value={lote.loteValidade}
                        onChange={handleChange('loteValidade')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth type="submit">
                        Novo lote
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormLote;
