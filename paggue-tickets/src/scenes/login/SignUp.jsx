import { Box, Grid, TextField, Button, Typography, Select, MenuItem, Snackbar } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { useAuth } from '../../hooks/useAuth';

const SignUp = () => {
    const { signUp } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const isValid = () => {
        return username.trim() !== '' && email.trim() !== '' && password.trim() !== '';
    };

    const handleSignUp = () => {
        if (isValid()) {
            signUp(username, email, password, isAdmin);
            setSnackbarSeverity('success');
            setSnackbarMessage('Conta criada com sucesso!');
        } else {
            setSnackbarSeverity('error');
            setSnackbarMessage('Por favor, preencha todos os campos obrigatórios.');
        }
        setSnackbarOpen(true);
    };

    return (
        <>
            <Box sx={{
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                width: '1000px',
                maxWidth: '100%',
                minHeight: '480px'
            }}>
                <Grid container alignItems="center" height="100%">
                    <Grid item xs={8} direction="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="white">
                        <Box color={"#5613AA"}>
                            <Typography variant='h2' fontWeight={"bold"}>Crie sua conta</Typography>
                            <Typography sx={{ fontSize: "15px" }}>Crie já sua conta e não perca nenhum evento!</Typography>
                        </Box>
                        <form style={{ height: '100%', width: '100%', maxWidth: '300px', display: "grid", placeItems: "center" }}>
                            <TextField
                                label="Nome de usuário"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Senha"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Select
                                label="Tipo de usuário"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                value={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.value)}
                            >
                                <MenuItem value={false}>Usuário</MenuItem>
                                <MenuItem value={true}>Administrador</MenuItem>
                            </Select>

                            <Button variant="contained" color="primary" onClick={handleSignUp} sx={{ marginTop: "10px", borderRadius: "10px", backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }}>
                                Criar Conta
                            </Button>
                        </form>
                    </Grid>

                    <Grid item xs={4} flexDirection="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="#5613AA" height='500px'>
                        <Typography pl={2} align='center' sx={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>Bem vindo a Paggue Tickets</Typography>
                        <Typography pl={2} pb={2} align='center' sx={{ fontSize: "10px", color: "white" }}>Entre já sua conta e não perca nenhum evento!</Typography>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ backgroundColor: "white", borderRadius: '10px', '&:hover': { backgroundColor: "#9d63e6" } }}>
                                <Typography sx={{ color: "#5613AA", fontWeight: "bold" }}>Fazer login</Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </>
    );
}

export default SignUp;
