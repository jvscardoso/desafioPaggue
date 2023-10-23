import React, { useState } from 'react';
import { TextField, Button, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const FormSetores = () => {
    const [setor, setSetor] = useState({
        setorNome: '',
        setorCapacidade: '',
        setorTicketDisponivel: '',
        setorTicketValor: '',
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };

    const handleChange = (prop) => (event) => {
        setSetor({ ...setor, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação dos campos
        if (setor.setorNome && setor.setorCapacidade && setor.setorTicketDisponivel && setor.setorTicketValor) {
            setSnackbar({ open: true, message: 'Setor cadastrado com sucesso sucesso!', severity: 'success' });
            setSetor({
                setorNome: '',
                setorCapacidade: '',
                setorTicketDisponivel: '',
                setorTicketValor: '',
            });
        } else {
            setSnackbar({ open: true, message: 'Todos os campos são obrigatórios!', severity: 'error' });
        }
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
                        onChange={handleChange('setorNome')}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Capacidade do setor"
                        variant="outlined"
                        value={setor.setorCapacidade}
                        onChange={handleChange('setorCapacidade')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Quantidade de ingressos por setor"
                        variant="outlined"
                        value={setor.setorTicketDisponivel}
                        onChange={handleChange('setorTicketDisponivel')}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Valor do ingresso"
                        variant="outlined"
                        value={setor.setorTicketValor}
                        onChange={handleChange('setorTicketValor')}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }}>
                        Cadastrar setor
                    </Button>
                </Grid>
            </Grid>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbar.severity}>
                    {snackbar.message}
                </MuiAlert>
            </Snackbar>
        </form>
    );
};

export default FormSetores;
