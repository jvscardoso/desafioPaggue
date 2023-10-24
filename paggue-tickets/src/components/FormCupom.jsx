import React, { useState } from 'react';
import { TextField, Button, Grid, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const FormCupom = () => {
    const [cupom, setCupom] = useState({
        titulo: '',
        porcentagem: '',
        dataValidade: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const isValid = () => {
        return cupom.titulo && cupom.porcentagem && cupom.dataValidade;
    };

    const handleChange = (prop) => (event) => {
        setCupom({ ...cupom, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid()) {
            setSnackbarSeverity('success');
            setSnackbarMessage('Cupom cadastrado com sucesso!');
        } else {
            setSnackbarSeverity('error');
            setSnackbarMessage('Por favor, preencha todos os campos obrigatórios.');
        }
        setSnackbarOpen(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Cadastrar novo cupom </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Cupom"
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
                    <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }}>
                        Cadastrar cupom
                    </Button>
                </Grid>
            </Grid>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </form>
    );
};

export default FormCupom;
