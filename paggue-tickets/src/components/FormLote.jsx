import React, { useState } from 'react';
import { TextField, Button, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const FormLote = () => {
    const [lote, setLote] = useState({
        loteNome: '',
        loteIngresso: '',
        loteValidade: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (prop) => (event) => {
        setLote({ ...lote, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (lote.loteNome && lote.loteIngresso && lote.loteValidade) {
            setSnackbarSeverity('success');
            setSnackbarMessage('Lote criado com sucesso!');
        } else {
            setSnackbarSeverity('error');
            setSnackbarMessage('Todos os campos são obrigatórios.');
        }
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
                    <Button variant="contained" color="primary" type="submit" sx={{backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}}>
                        Novo lote
                    </Button>
                </Grid>
            </Grid>

            {/* Snackbar para mostrar mensagens de sucesso ou erro */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </form>
    );
};

export default FormLote;
