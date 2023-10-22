import React, { useState } from 'react';
import { TextField, Button, Grid} from '@mui/material';

const FormSetores = () => {
    const [setor, setSetor] = useState({
        setorNome: '',
        setorCapacidade: '',
        setorTicketDisponivel: '',
        setorTicketValor: '',
    });

    const handleChange = (prop) => (event) => {
        setSetor({ ...setor, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Evento enviado:', setor);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nome do setor"
                        variant="outlined"
                        value={setor.setorNome}
                        onChange={handleChange('loteNome')}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Capacidade do setor"
                        variant="outlined"
                        value={setor.setorCapacidade}
                        onChange={handleChange('loteIngresso')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Quantidade de ingressos por setor"
                        variant="outlined"
                        value={setor.setorTicketDisponivel}
                        onChange={handleChange('loteIngresso')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Valor do ingresso"
                        variant="outlined"
                        value={setor.setorTicketValor}
                        onChange={handleChange('loteIngresso')}
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

export default FormSetores;
